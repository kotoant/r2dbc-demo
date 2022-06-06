package ru.jpoint.r2dbcdemo;

import eu.rekawek.toxiproxy.model.ToxicDirection;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import ru.jpoint.r2dbcdemo.domain.DomainChild;
import ru.jpoint.r2dbcdemo.domain.DomainParent;

import java.util.Collections;

@Slf4j
class SaveTest extends BaseTest {

    @BeforeAll
    static void setUpAll() throws Exception {
        PROXY.toxics().latency("latency", ToxicDirection.DOWNSTREAM, 10);
    }

    @Test
    void saveR2dbc() {
        DomainParent parent = r2dbcService.saveParentWithChildren(
            new DomainParent()
                .setName("parent")
                .setChildren(Collections.nCopies(1000, new DomainChild().setName("child")))
        ).block();
        log.info("r2dbc: {}", parent);
    }

    @Test
    void saveJdbc() {
        DomainParent parent = jdbcService.saveParentWithChildren(
            new DomainParent()
                .setName("parent")
                .setChildren(Collections.nCopies(1000, new DomainChild().setName("child")))
        ).block();
        log.info("jdbc: {}", parent);
    }
}
