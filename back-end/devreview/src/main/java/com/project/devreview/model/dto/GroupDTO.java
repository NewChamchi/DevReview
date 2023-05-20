package com.project.devreview.model.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class GroupDTO {
    private Long id;
    private String name;
    private String intro;
}
