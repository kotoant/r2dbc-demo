package ru.jpoint.r2dbcdemo.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseDataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Conditional;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.support.JdbcTransactionManager;
import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;

@Configuration
@ConditionalOnProperty(name = "jdbc.config.enabled", havingValue = "true")
public class JdbcConfig {
    @Primary
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource.hikari")
    @LiquibaseDataSource
    public HikariDataSource springDataSource(DataSourceProperties properties) {
        return newHikariDataSource(properties);
    }

    private HikariDataSource newHikariDataSource(DataSourceProperties properties) {
        var dataSource = new HikariDataSource();
        dataSource.setDriverClassName(properties.getDriverClassName());
        dataSource.setJdbcUrl(properties.getUrl());
        dataSource.setUsername(properties.getUsername());
        dataSource.setPassword(properties.getPassword());
        return dataSource;
    }

    @Bean
    public Scheduler reactiveJdbcServiceScheduler(HikariDataSource dataSource) {
        var threadCount = dataSource.getMaximumPoolSize();
        return Schedulers.newBoundedElastic(threadCount, Integer.MAX_VALUE, "reactiveJdbcServiceScheduler");
    }

    @Bean
    public DataSourceTransactionManager transactionManager(HikariDataSource dataSource) {
        return new JdbcTransactionManager(dataSource);
    }

}