package com.project.devreview.model.dto;

import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.Team;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class TeamDTO {
    private Long id;
    private String name;
    private String intro;

    @Builder
    public TeamDTO(String name, String intro){
        this.name = name;
        this.intro = intro;
    }
    @Builder
    public TeamDTO(Long id,String name, String intro){
        this.id = id;
        this.name = name;
        this.intro = intro;
    }
    public TeamDTO(Team team){
        this.id = team.getId();
        this.name = team.getName();
        this.intro = team.getIntro();
    }

    public Team toEntity(){
        return Team.builder()
                .id(id)
                .name(name)
                .intro(intro)
                .build();
    }
    public static TeamDTO toDto(Team team) { return new TeamDTO(team); }
    public static List<TeamDTO> listEntityToDto(List<Team> teams){
        return teams.stream()
                .map(TeamDTO::toDto).collect(Collectors.toList());
    }
    public static Page<TeamDTO> toPageDtoList(Page<Team> teamList) {
        Page<TeamDTO> teamDtoList = teamList.map(m ->
                toDto(m)
        );
        return teamDtoList;
    }
}
