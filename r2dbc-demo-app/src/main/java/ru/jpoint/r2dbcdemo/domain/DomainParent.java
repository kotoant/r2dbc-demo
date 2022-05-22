package ru.jpoint.r2dbcdemo.domain;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
@RequiredArgsConstructor
public class DomainParent {
    private Long id;
    private String name;
    private List<DomainChild> children = List.of();
}
