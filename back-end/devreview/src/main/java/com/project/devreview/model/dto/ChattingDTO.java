package com.project.devreview.model.dto;

import com.project.devreview.model.domain.Chatting;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class ChattingDTO {
    private Long id;
    private String content;
    private LocalDateTime datetime;
    private int type;
//    private int seq;
    private UserDTO userDTO;
    private TeamDTO teamDTO;
    private AttachedFileDTO attachedFile;

    @Builder
    public ChattingDTO(String content, LocalDateTime datetime, int type, UserDTO user, TeamDTO team, AttachedFileDTO attachedFile){
        this.content = content;
        this.datetime = datetime;
        this.type = type;
        this.userDTO = user;
        this.teamDTO = team;
        this.attachedFile = attachedFile;
    }
    @Builder
    public ChattingDTO(Long id, String content, LocalDateTime datetime, int type, UserDTO user, TeamDTO team, AttachedFileDTO attachedFile){
        this.id = id;
        this.content = content;
        this.datetime = datetime;
        this.type = type;
        this.userDTO = user;
        this.teamDTO = team;
        this.attachedFile = attachedFile;
    }
    @Builder
    public ChattingDTO(Chatting chatting){
        this.id = chatting.getId();
        this.content = chatting.getContent();
        this.datetime = chatting.getDatetime();
        this.userDTO = UserDTO.toDto(chatting.getUser());
        this.teamDTO = TeamDTO.toDto(chatting.getTeam());
        if(chatting.getAttachedFile()!=null){
            this.attachedFile = AttachedFileDTO.toDto(chatting.getAttachedFile());
        }

    }

    public Chatting toEntity(){
        if (attachedFile == null) {
            return Chatting.builder()
                    .id(id)
                    .content(content)
                    .datetime(datetime)
                    .user(userDTO.toEntity())
                    .team(teamDTO.toEntity())
                    .build();
        }
        return Chatting.builder()
                .id(id)
                .content(content)
                .datetime(datetime)
                .user(userDTO.toEntity())
                .team(teamDTO.toEntity())
                .attachedFile(attachedFile.toEntity())
                .build();
    }
    public static ChattingDTO toDto(Chatting chatting) { return new ChattingDTO(chatting); }
    public static List<ChattingDTO> listEntityToDto(List<Chatting> chattings){
        return chattings.stream()
                .map(ChattingDTO::toDto).collect(Collectors.toList());
    }

}
