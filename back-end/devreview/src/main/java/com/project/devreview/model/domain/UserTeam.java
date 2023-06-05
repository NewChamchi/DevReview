package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

//@IdClass(UserGroupId.class)
@Entity(name = "user_group")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserTeam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usergroup_id")
    private Long id;
//    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

//    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Team team;

    @Column(name = "user_group_is_block")
    private Boolean isBlock;

    @Builder
    public UserTeam(User user, Team team, Boolean isBlock){
        this.user = user;
        this.team = team;
        this.isBlock = isBlock;
    }
    @Builder
    public UserTeam(User user, Team team){
        this.user = user;
        this.team = team;
        isBlock = false;
    }


}
