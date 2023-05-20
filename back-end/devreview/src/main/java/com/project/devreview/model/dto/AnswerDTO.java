package com.project.devreview.model.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AnswerDTO {
    private long id;
    private String content;
    private boolean isAuto;
    private LocalDateTime datetime;
    private Long user_id;
    private Long ques_id;
}
