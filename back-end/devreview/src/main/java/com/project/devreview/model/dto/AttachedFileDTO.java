package com.project.devreview.model.dto;

import com.project.devreview.model.domain.AttachedFile;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class AttachedFileDTO {
    private Long id;
    private String name;
    private String extention;
    private String fileadd;

    @Builder
    public AttachedFileDTO(String name, String extention, String fileadd){
        this.name = name;
        this.extention = extention;
        this.fileadd = fileadd;
    }
    @Builder
    public AttachedFileDTO(Long id, String name, String extention, String fileadd){
        this.id = id;
        this.name = name;
        this.extention = extention;
        this.fileadd = fileadd;
    }
    @Builder
    public AttachedFileDTO(AttachedFile attachedFile){
        this.id= attachedFile.getId();
        this.name = attachedFile.getName();
        this.extention = attachedFile.getExtention();
        this.fileadd = attachedFile.getFileadd();
    }

    public AttachedFile toEntity(){
        return AttachedFile.builder()
                .id(id)
                .name(name)
                .extention(extention)
                .fileadd(fileadd)
                .build();
    }

    public static AttachedFileDTO toDto(AttachedFile attachedFile) { return new AttachedFileDTO(attachedFile); }
    public static List<AttachedFileDTO> listEntityToDto(List<AttachedFile> attachedFiles){
        return attachedFiles.stream()
                .map(AttachedFileDTO::toDto).collect(Collectors.toList());
    }
}
