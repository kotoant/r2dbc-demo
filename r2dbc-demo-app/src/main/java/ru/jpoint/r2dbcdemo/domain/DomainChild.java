package ru.jpoint.r2dbcdemo.domain;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@RequiredArgsConstructor
public class DomainChild {
    private Long id;
    private Long parentId;
    private String name;
}
