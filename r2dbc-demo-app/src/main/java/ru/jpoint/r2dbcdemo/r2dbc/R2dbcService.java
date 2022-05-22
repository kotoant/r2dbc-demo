package ru.jpoint.r2dbcdemo.r2dbc;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.r2dbc.repositories.ChildRepository;
import ru.jpoint.r2dbcdemo.r2dbc.repositories.ParentRepository;

@Transactional("connectionFactoryTransactionManager")
@Service
@RequiredArgsConstructor
public class R2dbcService {

    private final ParentRepository parentRepository;
    private final ChildRepository childRepository;
    private final R2dbcMapper mapper;

    public Mono<DomainParent> saveParentWithChildren(DomainParent parent) {
        var savedParentMono = parentRepository.save(mapper.fromDomain(parent));
        var savedChildrenMono = savedParentMono.flatMap(savedParent -> {
            parent.getChildren().forEach(child -> child.setParentId(savedParent.getId()));
            return childRepository.saveAll(mapper.fromDomain(parent.getChildren())).collectList();
        });
        return savedParentMono.zipWith(savedChildrenMono, mapper::toDomain);
    }
}
