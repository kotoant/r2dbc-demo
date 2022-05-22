--liquibase formatted sql

--changeset Anton.Kotov:1.1
create table if not exists parent
(
    id   bigserial primary key,
    name text not null
);
--rollback drop table if exists parent;

--changeset Anton.Kotov:1.2
create table if not exists child
(
    id        bigserial primary key,
    parent_id bigint references parent (id),
    name      text not null
);
--rollback drop table if exists child;
