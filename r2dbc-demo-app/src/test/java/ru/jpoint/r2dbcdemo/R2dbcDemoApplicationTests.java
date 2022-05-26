package ru.jpoint.r2dbcdemo;

import org.junit.jupiter.api.Test;
import ru.jpoint.r2dbcdemo.domain.DomainChild;
import ru.jpoint.r2dbcdemo.domain.DomainParent;

import java.util.Collections;

class R2dbcDemoApplicationTests extends BaseTest {
    @Test
    void saveR2dbc() {
        DomainParent parent = r2dbcService.saveParentWithChildren(
                new DomainParent()
                        .setName("parent")
                        .setChildren(Collections.nCopies(1000, new DomainChild().setName("child")))
        ).block();
        System.out.println(parent);
    }

    @Test
    void saveJdbc() {
        DomainParent parent = jdbcService.saveParentWithChildren(
            new DomainParent()
                .setName("parent")
                .setChildren(Collections.nCopies(1000, new DomainChild().setName("child")))
        ).block();
        System.out.println(parent);
    }
}
