package ru.jpoint.r2dbcdemo.jdbc;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Scheduler;
import ru.jpoint.r2dbcdemo.api.DatabaseService;
import ru.jpoint.r2dbcdemo.domain.DomainParent;

import java.util.concurrent.Callable;

@Service
@RequiredArgsConstructor
@ConditionalOnProperty(name = "jdbc.config.enabled", havingValue = "true")
public class ReactiveJdbcService implements DatabaseService {

    private final Scheduler scheduler;
    private final JdbcService service;

    @Override
    public Mono<DomainParent> saveParentWithChildren(DomainParent parent) {
        return wrapBlockingCall(() -> service.saveParentWithChildren(parent));
    }

    public  <T> Mono<T> wrapBlockingCall(Callable<T> callable) {
        return Mono.fromCallable(callable).subscribeOn(scheduler);
    }

    public Mono<Void> wrapBlockingCall(Runnable runnable) {
        return wrapBlockingCall(() -> {
            runnable.run();
            return null;
        });
    }
}
