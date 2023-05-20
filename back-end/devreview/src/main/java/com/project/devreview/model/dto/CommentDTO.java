package com.project.devreview.model.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommentDTO {
    private long id;
    private String content;
    private LocalDateTime datetime;
    private int seq;
    private Long answer_id;
    private Long user_id;
}
