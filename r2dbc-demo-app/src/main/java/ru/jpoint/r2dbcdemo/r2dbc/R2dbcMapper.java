package ru.jpoint.r2dbcdemo.r2dbc;

import org.mapstruct.Mapper;
import ru.jpoint.r2dbcdemo.domain.DomainChild;
import ru.jpoint.r2dbcdemo.domain.DomainParent;
import ru.jpoint.r2dbcdemo.r2dbc.projections.Child;
import ru.jpoint.r2dbcdemo.r2dbc.projections.Parent;

import java.util.List;

@Mapper(componentModel = "spring")
public interface R2dbcMapper {
    Parent fromDomain(DomainParent parent);
    List<Child> fromDomain(List<DomainChild> children);
    DomainParent toDomain(Parent parent, List<Child> children);
}
