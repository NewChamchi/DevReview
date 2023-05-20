package com.project.devreview.model.dto;

import lombok.Data;

@Data
public class FileDTO {
    private Long id;
    private String name;
    private String extention;
    private String fileadd;
    private Long chat_id;
}
