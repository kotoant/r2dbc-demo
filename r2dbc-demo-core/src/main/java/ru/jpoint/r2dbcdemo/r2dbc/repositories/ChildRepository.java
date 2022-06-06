package ru.jpoint.r2dbcdemo.r2dbc.repositories;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import ru.jpoint.r2dbcdemo.r2dbc.projections.Child;

@Repository
public interface ChildRepository extends R2dbcRepository<Child, Long> {
}
