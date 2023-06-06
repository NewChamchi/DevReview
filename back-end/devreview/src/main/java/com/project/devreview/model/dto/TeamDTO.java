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
    private NoticeDTO noticeDTO;

    @Builder
    public TeamDTO(String name, String intro, NoticeDTO noticeDTO){
        this.name = name;
        this.intro = intro;
        this.noticeDTO = noticeDTO;
    }
    @Builder
    public TeamDTO(Long id,String name, String intro, NoticeDTO noticeDTO){
        this.id = id;
        this.name = name;
        this.intro = intro;
        this.noticeDTO = noticeDTO;
    }
    public TeamDTO(Team team){
        this.id = team.getId();
        this.name = team.getName();
        this.intro = team.getIntro();
        if(team.getNotice()!=null){

            this.noticeDTO = NoticeDTO.toDto(team.getNotice());
        }
    }

    public Team toEntity(){
        if(noticeDTO==null){
            return Team.builder()
                    .id(id)
                    .name(name)
                    .intro(intro)
                    .build();
        }
        return Team.builder()
                .id(id)
                .name(name)
                .intro(intro)
                .notice(noticeDTO.toEntity())
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
