package ru.jpoint.r2dbcdemo.jdbc;

import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.jooq.tables.records.ChildRecord;
import ru.jpoint.r2dbcdemo.jooq.tables.records.ParentRecord;

import java.util.List;
import java.util.stream.Collectors;

import static ru.jpoint.r2dbcdemo.jooq.tables.Child.CHILD;
import static ru.jpoint.r2dbcdemo.jooq.tables.Parent.PARENT;

@Transactional(transactionManager = "transactionManager")
@Service
@RequiredArgsConstructor
public class JdbcService {

    private final DSLContext dsl;
    private final JdbcMapper mapper;

    public DomainParent createParent(String name) {
        var parentRecord = dsl.newRecord(PARENT);
        parentRecord.setName(name);
        parentRecord.store();
        return mapper.toDomain(parentRecord, List.of());
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
