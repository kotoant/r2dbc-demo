package ru.jpoint.r2dbcdemo;

import liquibase.repackaged.org.apache.commons.lang3.RandomStringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.jdbc.JdbcService;
import ru.jpoint.r2dbcdemo.jdbc.ReactiveJdbcService;

@RestController
@RequiredArgsConstructor
public class WebFluxJdbcController {
    private final JdbcService jdbcService;
    private final ReactiveJdbcService reactiveJdbcService;

    @PostMapping("/parent")
    public Mono<DomainParent> createParent() {
        return reactiveJdbcService.wrapBlockingCall(() -> jdbcService.createParent(RandomStringUtils.randomAlphanumeric(10)));
    }
}
