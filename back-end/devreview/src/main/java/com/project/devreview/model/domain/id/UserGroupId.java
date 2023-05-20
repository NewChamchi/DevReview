package com.project.devreview.model.domain.id;

import java.io.Serializable;

public class UserGroupId implements Serializable {
    private long user;
    private long group;

    public UserGroupId(){}
    public UserGroupId(long user_id, long group_id){
        this.user = user_id;
        this.group = group_id;
    }
}
