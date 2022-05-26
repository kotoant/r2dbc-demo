package ru.jpoint.r2dbcdemo.api;

import reactor.core.publisher.Mono;
import ru.jpoint.r2dbcdemo.domain.DomainParent;

public interface DatabaseService {
    Mono<DomainParent> saveParentWithChildren(DomainParent parent);
}
