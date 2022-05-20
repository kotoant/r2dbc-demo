package ru.jpoint.r2dbcdemo.r2dbc;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;
import ru.jpoint.r2dbcdemo.r2dbc.projections.Parent;
import ru.jpoint.r2dbcdemo.r2dbc.repositories.ChildRepository;
import ru.jpoint.r2dbcdemo.r2dbc.repositories.ParentRepository;

@Transactional("connectionFactoryTransactionManager")
@Service
@RequiredArgsConstructor
public class R2dbcService {

    private final ParentRepository parentRepository;
    private final ChildRepository childRepository;

    public Mono<Parent> saveParentWithChildren(Parent parent) {
        var savedParentMono = parentRepository.save(parent);
        var savedChildrenMono = savedParentMono.flatMap(savedParent -> {
            parent.getChildren().forEach(child -> child.setParentId(savedParent.getId()));
            return childRepository.saveAll(parent.getChildren()).collectList();
        });
        return savedParentMono.zipWith(savedChildrenMono, (savedParent, children) -> {
            savedParent.setChildren(children);
            return savedParent;
        });
    }
}
