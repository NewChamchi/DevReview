package com.project.devreview.model.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ChattingDTO {
    private Long id;
    private String content;
    private LocalDateTime datetime;
    private int type;
//    private int seq;
    private Long user_id;
    private Long group_id;

}
