package com.project.devreview.model.dto;

import com.project.devreview.model.domain.Tag;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class TagDTO {
    private Long id;
    private String name;

    public TagDTO(Long id, String name){
        this.id = id;
        this.name = name;
    }
    public TagDTO(Tag tag){
        this.id = tag.getId();
        this.name = tag.getName();
    }

    public Tag toEntity(){
        return Tag.builder()
                .id(id)
                .name(name)
                .build();
    }

    public static TagDTO toDto(Tag tag){
        return new TagDTO(tag);
    }
    public static List<TagDTO> listEntityToDto(List<Tag> tags){
        return tags.stream()
                .map(TagDTO::toDto).collect(Collectors.toList());
    }

}
