package com.project.devreview.model.dto;

import com.project.devreview.model.domain.Notice;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class NoticeDTO {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime datetime;

    @Builder
    public NoticeDTO(String title, String content, LocalDateTime datetime){
        this.title = title;
        this.content = content;
        this.datetime = datetime;
    }
    @Builder
    public NoticeDTO(Long id, String title, String content, LocalDateTime datetime){
        this.id = id;
        this.title = title;
        this.content = content;
        this.datetime = datetime;
    }
    @Builder
    public NoticeDTO(Notice notice){
        this.id = notice.getId();
        this.title = notice.getTitle();
        this.content = notice.getContent();
        this.datetime = notice.getDatetime();
    }
    public Notice toEntity(){
        return Notice.builder()
                .id(id)
                .title(title)
                .content(content)
                .datetime(datetime)
                .build();
    }
    public static NoticeDTO toDto(Notice notice) { return new NoticeDTO(notice); }
    public static List<NoticeDTO> listEntityToDto(List<Notice> notices){
        return notices.stream()
                .map(NoticeDTO::toDto).collect(Collectors.toList());
    }
}
