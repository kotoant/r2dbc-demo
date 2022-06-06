package ru.jpoint.r2dbcdemo.r2dbc.repositories;

import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import ru.jpoint.r2dbcdemo.r2dbc.projections.Parent;

@Repository
public interface ParentRepository extends R2dbcRepository<Parent, Long> {
    Flux<Parent> findAllByNameEqualsIgnoreCase(String name);
}
