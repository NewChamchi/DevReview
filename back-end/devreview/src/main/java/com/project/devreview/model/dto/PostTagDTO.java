package com.project.devreview.model.dto;

import com.project.devreview.model.domain.PostTag;
import com.project.devreview.model.domain.QuesTag;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class PostTagDTO {
    private PostDTO postDTO;
    private TagDTO tagDTO;

    public PostTagDTO(PostDTO pos, TagDTO tag){
        this.postDTO = pos;
        this.tagDTO = tag;
    }
    public PostTagDTO(PostTag postTag){
        this.postDTO = PostDTO.toDto(postTag.getPost());
        this.tagDTO = TagDTO.toDto(postTag.getTag());
    }
    public PostTag toEntity(){
        return PostTag.builder()
                .post(postDTO.toEntity())
                .tag(tagDTO.toEntity())
                .build();
    }
    public static PostTagDTO toDto(PostTag postTag){
        return new PostTagDTO(postTag);
    }
    public static List<PostTagDTO> listEntityToDto(List<PostTag> postTags){
        return postTags.stream()
                .map(PostTagDTO::toDto).collect(Collectors.toList());
    }
}
