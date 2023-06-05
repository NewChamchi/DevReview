package com.project.devreview.model.dto;

import com.project.devreview.model.domain.PostTag;
import com.project.devreview.model.domain.UserTeam;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class UserTeamDTO {
    private UserDTO userDTO;
    private TeamDTO teamDTO;
    private Boolean isBlock;
    public UserTeamDTO(UserDTO userDTO, TeamDTO teamDTO){
        this.userDTO = userDTO;
        this.teamDTO = teamDTO;
        this.isBlock = false;
    }
    public UserTeamDTO(UserDTO userDTO, TeamDTO teamDTO,Boolean isBlock){
        this.userDTO = userDTO;
        this.teamDTO = teamDTO;
        this.isBlock = isBlock;
    }
    public UserTeamDTO(UserTeam userTeam){
        this.userDTO = UserDTO.toDto(userTeam.getUser());
        this.teamDTO = TeamDTO.toDto(userTeam.getTeam());
        this.isBlock = userTeam.getIsBlock();
    }

    public UserTeam toEntity(){
        return UserTeam.builder()
                .user(userDTO.toEntity())
                .team(teamDTO.toEntity())
                .isBlock(isBlock)
                .build();
    }
    public static UserTeamDTO toDto(UserTeam userTeam){
        return new UserTeamDTO(userTeam);
    }
    public static List<UserTeamDTO> listEntityToDto(List<UserTeam> userTeams){
        return userTeams.stream()
                .map(UserTeamDTO::toDto).collect(Collectors.toList());
    }
}
