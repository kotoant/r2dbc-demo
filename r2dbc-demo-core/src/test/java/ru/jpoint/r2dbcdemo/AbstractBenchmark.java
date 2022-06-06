package ru.jpoint.r2dbcdemo;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.OutputTimeUnit;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.results.format.ResultFormatType;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ru.jpoint.r2dbcdemo.r2dbc.R2dbcService;

import java.util.concurrent.TimeUnit;

@SpringBootTest
@State(Scope.Benchmark)
@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.SECONDS)
@Slf4j
abstract public class AbstractBenchmark {

    protected static final R2dbcDemoPostgresqlContainer POSTGRESQL_CONTAINER =
            R2dbcDemoPostgresqlContainer.getInstance();

    static {
        POSTGRESQL_CONTAINER.start();
        log.info("Postgresql container started. Address: {}, port: {}",
                POSTGRESQL_CONTAINER.getHost(),
                POSTGRESQL_CONTAINER.getFirstMappedPort());
    }

    protected static R2dbcService r2dbcService;

    @Autowired
    void setR2dbcService(R2dbcService r2dbcService) {
        AbstractBenchmark.r2dbcService = r2dbcService;
    }

    private final static Integer MEASUREMENT_ITERATIONS = 3;
    private final static Integer WARMUP_ITERATIONS = 2;

    @Test
    public void executeJmhRunner() throws RunnerException {
        Options opt = new OptionsBuilder()
                // set the class name regex for benchmarks to search for to the current class
                .include("\\." + this.getClass().getSimpleName() + "\\.")
                .warmupIterations(WARMUP_ITERATIONS)
                .measurementIterations(MEASUREMENT_ITERATIONS)
                // do not use forking or the benchmark methods will not see references stored within its class
                .forks(0)
                // do not use multiple threads
                .threads(1)
                .shouldDoGC(true)
                .shouldFailOnError(true)
                .resultFormat(ResultFormatType.JSON)
                .result("/dev/null") // set this to a valid filename if you want reports
                .jvmArgs("-server")
                .build();

        new Runner(opt).run();
    }
}
