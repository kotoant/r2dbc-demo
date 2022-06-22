package ru.jpoint.r2dbcdemo.r2dbc;

import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;
import reactor.core.scheduler.Schedulers;
import ru.jpoint.r2dbcdemo.api.DatabaseService;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.r2dbc.projections.Parent;
import ru.jpoint.r2dbcdemo.r2dbc.repositories.ChildRepository;
import ru.jpoint.r2dbcdemo.r2dbc.repositories.ParentRepository;

import java.util.List;

@Transactional(transactionManager = "connectionFactoryTransactionManager")
@Service
@RequiredArgsConstructor
public class R2dbcService implements DatabaseService {

    private final ParentRepository parentRepository;
    private final ChildRepository childRepository;
    private final R2dbcMapper mapper;
    private final DatabaseClient databaseClient;

    public Mono<DomainParent> createParent(String name) {
        return parentRepository.save(new Parent().setName(name)).map(parent -> mapper.toDomain(parent, List.of()));
    }

    public Mono<Void> sleep(int times, long millis) {
        val seconds = millis / 1000.0;
        return databaseClient.sql("select pg_sleep(:seconds)").bind("seconds", seconds).then()
                .repeat(times - 1).then();
    }

    @Override
    public Mono<DomainParent> saveParentWithChildren(DomainParent parent) {
        var parentEntity = mapper.fromDomain(parent);
        var savedParentMono = parentRepository.save(parentEntity);
        var savedChildrenMono = savedParentMono.flatMap(savedParent -> {
            parent.getChildren().forEach(child -> child.setParentId(savedParent.getId()));
            var children = mapper.fromDomain(parent.getChildren());
            return childRepository.saveAll(children).collectList();
        });
        return savedParentMono.zipWith(savedChildrenMono, mapper::toDomain);
    }
}
