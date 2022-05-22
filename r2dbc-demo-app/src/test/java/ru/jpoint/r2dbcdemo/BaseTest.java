package ru.jpoint.r2dbcdemo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import ru.jpoint.r2dbcdemo.r2dbc.R2dbcService;

@Slf4j
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
abstract class BaseTest {

    protected static final R2dbcDemoPostgresqlContainer POSTGRESQL_CONTAINER =
        R2dbcDemoPostgresqlContainer.getInstance();

    @LocalServerPort
    protected int localServerPort;

    static {
        POSTGRESQL_CONTAINER.start();
        log.info("Postgresql container started. Address: {}, port: {}",
            POSTGRESQL_CONTAINER.getHost(),
            POSTGRESQL_CONTAINER.getFirstMappedPort());
    }

    @Autowired
    protected R2dbcService r2dbcService;
}
