package com.project.devreview.model.dto;

import com.project.devreview.model.domain.Post;
import com.project.devreview.model.domain.Team;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class PostDTO {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime datetime;
    private TeamDTO teamDTO;

    @Builder
    public PostDTO(String title, String content, LocalDateTime datetime, TeamDTO teamDTO){
        this.title = title;
        this.content = content;
        this.datetime = datetime;
        this.teamDTO = teamDTO;
    }
    @Builder
    public PostDTO(Long id, String title, String content, LocalDateTime datetime, TeamDTO teamDTO){
        this.id = id;
        this.title = title;
        this.content = content;
        this.datetime = datetime;
        this.teamDTO = teamDTO;
    }

    @Builder
    public PostDTO(Post post){
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.datetime = post.getDatetime();
        this.teamDTO = TeamDTO.toDto(post.getTeam());
    }

    public Post toEntity(){
        return Post.builder()
                .id(id)
                .title(title)
                .content(content)
                .datetime(datetime)
                .team(teamDTO.toEntity())
                .build();
    }

    public static PostDTO toDto(Post post) { return new PostDTO(post); }
    public static List<PostDTO> listEntityToDto(List<Post> posts){
        return posts.stream()
                .map(PostDTO::toDto).collect(Collectors.toList());
    }
}
