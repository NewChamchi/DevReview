package com.project.devreview.service.impl;

import com.project.devreview.model.dto.TeamDTO;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.service.interf.TeamService;
import com.project.devreview.service.interf.UserService;
import com.project.devreview.service.interf.UserTeamService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserTeamServiceImplTest {
    @Autowired
    UserService userService;
    @Autowired
    UserTeamService userTeamService;
    @Autowired
    TeamService teamService;

    @Test
    void registerUserTeam() {
        UserDTO userDTO = userService.findUserById(2L);
        TeamDTO teamDTO = teamService.readTeamById(2L);
        userTeamService.registerUserTeam(teamDTO,userDTO);

    }

    @Test
    void setUserBlock() {
    }

    @Test
    void readUserByTeam() {
        List<UserDTO> users = userTeamService.readUserByTeam(teamService.readTeamById(2L));
        for(UserDTO userDTO:users){
            System.out.println(userDTO);
        }
    }

    @Test
    void readTeamByUser() {
        List<TeamDTO> teams = userTeamService.readTeamByUser(userService.findUserById(1L));
        for(TeamDTO teamDTO : teams){
            System.out.println(teamDTO);
        }
    }

    @Test
    void deleteUserFromTeam() {

        userTeamService.deleteUserFromTeam(2L,2L);

    }
}