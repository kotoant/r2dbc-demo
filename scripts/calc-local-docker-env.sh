#!/bin/bash

echo spring.config.location=r2dbc-demo-core/src/test/resources/application.yml >> .env
echo -n 'LOCAL_POSTGRES_PORT=' >> .env
echo $(docker ps -a -q -f ancestor='postgres:14' | xargs -I{} docker port {} 5432 | cut -c9-) >> .env
echo 'DB_URL=r2dbc:pool:postgresql://localhost:${LOCAL_POSTGRES_PORT}/r2dbc_demo' >> .env
echo 'DB_JDBC_URL=jdbc:postgresql://localhost:${LOCAL_POSTGRES_PORT}/r2dbc_demo?loggerLevel=OFF' >> .env
echo DB_USERNAME=r2dbc_demo >> .env
echo DB_PASSWORD=r2dbc_demo >> .env
