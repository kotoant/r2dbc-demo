package ru.jpoint.r2dbcdemo.jdbc;

import org.mapstruct.Mapper;
import org.mapstruct.NullValueCheckStrategy;
import ru.jpoint.r2dbcdemo.domain.DomainChild;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.jooq.tables.records.ChildRecord;
import ru.jpoint.r2dbcdemo.jooq.tables.records.ParentRecord;

import java.util.List;

@Mapper(componentModel = "spring", nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface JdbcMapper {
    ParentRecord fromDomain(DomainParent parent);

    List<ChildRecord> fromDomain(List<DomainChild> children);

    DomainParent toDomain(ParentRecord parent, List<ChildRecord> children);
}
