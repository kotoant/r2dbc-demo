package ru.jpoint.r2dbcdemo.webmvc;

import liquibase.repackaged.org.apache.commons.lang3.RandomStringUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.jdbc.JdbcService;

@RestController
@RequiredArgsConstructor
public class WebMvcController {
    private final JdbcService jdbcService;

    @PostMapping("/parent")
    public DomainParent createParent() {
        return jdbcService.createParent(RandomStringUtils.randomAlphanumeric(10));
    }
}
