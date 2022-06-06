package ru.jpoint.r2dbcdemo;

import liquibase.repackaged.org.apache.commons.lang3.RandomStringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.r2dbc.R2dbcService;

@RestController
@RequiredArgsConstructor
public class WebFluxR2dbcController {
    private final R2dbcService r2dbcService;

    @PostMapping("/parent")
    public Mono<DomainParent> createParent() {
        return r2dbcService.createParent(RandomStringUtils.randomAlphanumeric(10));
    }
}
