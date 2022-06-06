package ru.jpoint.r2dbcdemo.r2dbc;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;
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

    public Mono<DomainParent> createParent(String name) {
        return parentRepository.save(new Parent().setName(name)).map(parent -> mapper.toDomain(parent, List.of()));
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
