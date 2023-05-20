package com.project.devreview.model.domain;

import com.project.devreview.model.domain.id.UserGroupId;
import jakarta.persistence.*;
import lombok.Getter;

import java.io.Serializable;

@IdClass(UserGroupId.class)
@Entity
@Getter
public class UserGroup implements Serializable {
    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "group_id")
    private Group group;

    @Column(name = "user_group_is_block")
    private Boolean isBlock;

}
