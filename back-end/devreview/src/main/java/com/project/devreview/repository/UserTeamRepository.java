package com.project.devreview.repository;

import com.project.devreview.model.domain.Team;
import com.project.devreview.model.domain.User;
import com.project.devreview.model.domain.UserTeam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserTeamRepository extends JpaRepository<UserTeam,Long> {
    List<UserTeam> findByTeam(Team team);
    List<UserTeam> findByUser(User user);
    UserTeam findByUserAndTeam(User user, Team team);
    @Modifying(clearAutomatically = true)
    @Query("UPDATE user_group a SET a.isBlock = true WHERE a.id = :id")
    int updateStateBlock(Long id);
    @Modifying(clearAutomatically = true)
    @Query("UPDATE user_group a SET a.isBlock = false WHERE a.id = :id")
    int updateStateNotBlock(Long id);
}
