package ru.jpoint.r2dbcdemo;

import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.utility.DockerImageName;
import org.testcontainers.utility.MountableFile;

import java.time.Duration;

public final class R2dbcDemoPostgresqlContainer extends PostgreSQLContainer<R2dbcDemoPostgresqlContainer> {
    private static final String IMAGE_VERSION = "postgres:14";
    private static R2dbcDemoPostgresqlContainer container;

    private R2dbcDemoPostgresqlContainer() {
        super(DockerImageName.parse(IMAGE_VERSION).asCompatibleSubstituteFor("postgres"));
    }

    public static R2dbcDemoPostgresqlContainer getInstance() {
        if (container == null) {
            container = new R2dbcDemoPostgresqlContainer()
//                .withReuse(true)
                .withStartupTimeout(Duration.ofMinutes(5))
                .withUsername("r2dbc_demo")
                .withDatabaseName("r2dbc_demo")
                .withPassword("r2dbc_demo")
                .withCopyFileToContainer(
                    MountableFile.forClasspathResource("db/init.sql"),
                    "/docker-entrypoint-initdb.d/init.sql");
        }
        return container;
    }

    public String getR2dbcUrl(String host, int port) {
        return "r2dbc:pool:postgresql://"
            + host + ":"
            + port + "/"
            + getDatabaseName();
    }

    public String getJdbcUrl(String host, int port) {
        String additionalUrlParams = this.constructUrlParameters("?", "&");
        return "jdbc:postgresql://" + host + ":" + port + "/" + this.getDatabaseName() + additionalUrlParams;
    }

    @Override
    public void start() {
        super.start();
    }

    @Override
    public void stop() {
        //do nothing, JVM handles shut down
    }
}
