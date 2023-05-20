package com.project.devreview.model.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class NoticeDTO {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime datetime;
    private Long group_id;
}
