package com.project.devreview.model.domain;

import com.project.devreview.model.domain.id.UserGroupId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

//@IdClass(UserGroupId.class)
@Entity(name = "user_group")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usergroup_id")
    private Long id;
//    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

//    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "group_id")
    private Team team;

    @Column(name = "user_group_is_block")
    private Boolean isBlock;

    @Builder
    public UserGroup(User user, Team team, Boolean isBlock){
        this.user = user;
        this.team = team;
        this.isBlock = isBlock;
    }
    @Builder
    public UserGroup(User user, Team team){
        this.user = user;
        this.team = team;
        isBlock = false;
    }


}
