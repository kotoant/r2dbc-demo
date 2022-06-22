package ru.jpoint.r2dbcdemo.jdbc;

import lombok.RequiredArgsConstructor;
import lombok.val;
import org.jooq.DSLContext;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.jooq.pg_catalog.Routines;
import ru.jpoint.r2dbcdemo.jooq.r2dbc_demo.tables.records.ChildRecord;

import java.util.List;
import java.util.stream.Collectors;

import static ru.jpoint.r2dbcdemo.jooq.r2dbc_demo.tables.Child.CHILD;
import static ru.jpoint.r2dbcdemo.jooq.r2dbc_demo.tables.Parent.PARENT;

@Transactional(transactionManager = "transactionManager")
@Service
@RequiredArgsConstructor
@ConditionalOnProperty(name = "jdbc.config.enabled", havingValue = "true")
public class JdbcService {

    private final DSLContext dsl;
    private final JdbcMapper mapper;

    public DomainParent createParent(String name) {
        var parentRecord = dsl.newRecord(PARENT);
        parentRecord.setName(name);
        parentRecord.store();
        return mapper.toDomain(parentRecord, List.of());
    }

    public void sleep(int times, long millis) {
        val seconds = millis / 1000.0;
        for (int i = 0; i < times; ++i) {
            Routines.pgSleep(dsl.configuration(), seconds);
        }
    }

    public DomainParent saveParentWithChildren(DomainParent parent) {
        var parentRecord = dsl.newRecord(PARENT, mapper.fromDomain(parent));
        parentRecord.store();
        parent.getChildren().forEach(child -> child.setParentId(parentRecord.getId()));
        var childrenRecords = mapper.fromDomain(parent.getChildren())
                .stream().map(record -> dsl.newRecord(CHILD, record)).collect(Collectors.toList());
        dsl.batchStore(childrenRecords).execute();
        try (var childRecords = dsl.selectFrom(CHILD)) {
            var children = childRecords.where(CHILD.PARENT_ID.eq(parentRecord.getId()))
                    .fetchInto(ChildRecord.class);
            return mapper.toDomain(parentRecord, children);
        }
    }
}


