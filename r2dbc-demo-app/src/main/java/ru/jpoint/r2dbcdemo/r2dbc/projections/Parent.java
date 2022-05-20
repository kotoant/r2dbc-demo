package ru.jpoint.r2dbcdemo.r2dbc.projections;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Table("parent")
@Data
@Accessors(chain = true)
@RequiredArgsConstructor
public class Parent {

    @Id
    @Column("id")
    private Long id;

    @Column("name")
    private String name;

    private List<Child> children;
}
