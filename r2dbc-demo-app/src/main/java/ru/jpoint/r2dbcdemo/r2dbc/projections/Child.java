package ru.jpoint.r2dbcdemo.r2dbc.projections;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("child")
@Data
@Accessors(chain = true)
@RequiredArgsConstructor
public class Child {

    @Id
    @Column("id")
    private Long id;

    @Column("parent_id")
    private Long parentId;

    @Column("name")
    private String name;
}
