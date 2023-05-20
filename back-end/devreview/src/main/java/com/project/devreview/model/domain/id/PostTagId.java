package com.project.devreview.model.domain.id;

import jakarta.persistence.Column;

import java.io.Serializable;

public class PostTagId implements Serializable {
    @Column
    private long tag;
    @Column
    private long post;

    public PostTagId(){}
    public PostTagId(long tag_id, long post_id)
    {
        this.tag = tag_id;
        this.post = post_id;
    }
}
