package ru.jpoint.r2dbcdemo;

import org.openjdk.jmh.annotations.Benchmark;
import ru.jpoint.r2dbcdemo.domain.DomainChild;
import ru.jpoint.r2dbcdemo.domain.DomainParent;

import java.util.Collections;

public class SomeBenchmark extends AbstractBenchmark {
    @Benchmark
    public void someBenchmarkMethod() {
        DomainParent parent = r2dbcService.saveParentWithChildren(
                new DomainParent()
                        .setName("parent")
                        .setChildren(Collections.nCopies(1000, new DomainChild().setName("child")))
        ).block();
    }
}
