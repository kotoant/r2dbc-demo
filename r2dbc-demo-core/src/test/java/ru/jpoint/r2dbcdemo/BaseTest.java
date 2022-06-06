package ru.jpoint.r2dbcdemo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.testcontainers.containers.Network;
import org.testcontainers.containers.ToxiproxyContainer;
import org.testcontainers.utility.DockerImageName;
import org.testcontainers.utility.ResourceReaper;
import ru.jpoint.r2dbcdemo.jdbc.ReactiveJdbcService;
import ru.jpoint.r2dbcdemo.r2dbc.R2dbcService;

@Slf4j
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
abstract class BaseTest {
    private static final String TOXIPROXY_NETWORK_ALIAS = "toxiproxy";
    private static final Network NETWORK = Network.newNetwork();

    protected static final R2dbcDemoPostgresqlContainer POSTGRESQL_CONTAINER;
    protected static final ToxiproxyContainer TOXIPROXY_CONTAINER;
    protected static final ToxiproxyContainer.ContainerProxy PROXY;


    @LocalServerPort
    protected int localServerPort;

    static {
        ResourceReaper.instance().registerNetworkIdForCleanup(NETWORK.getId());
        POSTGRESQL_CONTAINER = R2dbcDemoPostgresqlContainer.getInstance()
            .withExposedPorts(5432)
            .withNetwork(NETWORK);
        POSTGRESQL_CONTAINER.start();
        log.info("Postgresql container started. Address: {}, port: {}",
            POSTGRESQL_CONTAINER.getHost(),
            POSTGRESQL_CONTAINER.getFirstMappedPort());
        TOXIPROXY_CONTAINER = new ToxiproxyContainer(DockerImageName.parse("shopify/toxiproxy:2.1.0"))
            .withNetwork(NETWORK)
            .withNetworkAliases(TOXIPROXY_NETWORK_ALIAS);
        TOXIPROXY_CONTAINER.start();
        PROXY = TOXIPROXY_CONTAINER.getProxy(POSTGRESQL_CONTAINER, 5432);
        var r2dbcUrl = POSTGRESQL_CONTAINER.getR2dbcUrl(PROXY.getContainerIpAddress(), PROXY.getProxyPort());
        System.setProperty("DB_URL", r2dbcUrl);
        var jdbcUrl =
            POSTGRESQL_CONTAINER.getJdbcUrl(PROXY.getContainerIpAddress(), PROXY.getProxyPort()) + "&TC_REUSABLE=true";
        System.setProperty("DB_JDBC_URL", jdbcUrl);
        System.setProperty("DB_USERNAME", POSTGRESQL_CONTAINER.getUsername());
        System.setProperty("DB_PASSWORD", POSTGRESQL_CONTAINER.getPassword());
        log.info("jdbcUrl: {}", jdbcUrl);
    }

    @Autowired
    protected R2dbcService r2dbcService;

    @Autowired
    protected ReactiveJdbcService jdbcService;
}
