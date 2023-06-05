package com.project.devreview.service.interf;

import com.project.devreview.model.dto.TeamDTO;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.model.dto.UserTeamDTO;

import java.util.List;

public interface UserTeamService {
    Long registerUserTeam(TeamDTO teamDTO, UserDTO userDTO);
    int setUserBlock(UserDTO userDTO);
    List<UserDTO> readUserByTeam(TeamDTO teamDTO);
    List<TeamDTO> readTeamByUser(UserDTO userDTO);
    Long deleteUserFromTeam(Long userid, Long teamid);
}
