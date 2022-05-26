package ru.jpoint.r2dbcdemo.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;
import ru.jpoint.r2dbcdemo.api.DatabaseService;
import ru.jpoint.r2dbcdemo.domain.DomainParent;

import java.util.concurrent.Callable;

@Service
@RequiredArgsConstructor
public class ReactiveJdbcService implements DatabaseService {

    private final Scheduler scheduler;
    private final JdbcService service;

    @Override
    public Mono<DomainParent> saveParentWithChildren(DomainParent parent) {
        return wrapBlockingCall(() -> service.saveParentWithChildren(parent));
    }

    private <T> Mono<T> wrapBlockingCall(Callable<T> callable) {
        return Mono.fromCallable(callable).subscribeOn(scheduler);
    }
}
