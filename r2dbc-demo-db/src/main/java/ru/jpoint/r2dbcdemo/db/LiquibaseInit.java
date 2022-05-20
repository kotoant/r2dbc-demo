package ru.jpoint.r2dbcdemo.db;

import liquibase.Contexts;
import liquibase.Liquibase;
import liquibase.database.DatabaseFactory;
import liquibase.database.jvm.JdbcConnection;
import liquibase.exception.DatabaseException;
import liquibase.exception.LiquibaseException;
import liquibase.resource.ClassLoaderResourceAccessor;

import java.sql.Connection;

public class LiquibaseInit {
    public static void initFunction(Connection connection) throws DatabaseException {
        try {
            var database = DatabaseFactory.getInstance()
                .findCorrectDatabaseImplementation(new JdbcConnection(connection));

            database.setDefaultSchemaName("public");
            new Liquibase("db/init.sql", new ClassLoaderResourceAccessor(), database)
                .update(new Contexts());

            database.setDefaultSchemaName("r2dbc_demo");
            new Liquibase("db/changelog/database_changelog.xml", new ClassLoaderResourceAccessor(), database)
                .update(new Contexts());

        } catch (LiquibaseException e) {
            throw new DatabaseException(e);
        }
    }
}
