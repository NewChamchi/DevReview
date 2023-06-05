package com.project.devreview.service.impl;

import com.project.devreview.model.dto.TeamDTO;
import com.project.devreview.model.dto.UserTeamDTO;
import com.project.devreview.service.interf.TeamService;
import com.project.devreview.service.interf.UserService;
import com.project.devreview.service.interf.UserTeamService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TeamServiceImplTest {
    @Autowired
    TeamService teamService;
    @Autowired
    UserService userService;
    @Autowired
    UserTeamService userTeamService;

    @Test
    void registerTeam() {
        userService.findUserById(1L);
        TeamDTO teamDTO = new TeamDTO("첫모임", "처음으로 모임을 생성하다.");
        teamService.registerTeam(teamDTO);
//        TeamDTO team = teamService.readTeamById(1L);
        userTeamService.registerUserTeam(teamService.readTeamById(2L), userService.findUserById(1L));

        System.out.println(teamDTO);
    }

    @Test
    void readTeamList() {
        List<TeamDTO> teams = teamService.readTeamList();
        for(TeamDTO teamDTO:teams){
            System.out.println(teamDTO);
        }
    }

    @Test
    void readTeamById() {
        TeamDTO teamDTO = teamService.readTeamById(2L);
        System.out.println(teamDTO);
    }

    @Test
    void deleteTeamById() {
        teamService.deleteTeamById(3L);
        List<TeamDTO> teams = teamService.readTeamList();
        System.out.println(teams);
    }
}