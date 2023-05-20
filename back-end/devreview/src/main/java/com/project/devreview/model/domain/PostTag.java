package com.project.devreview.model.domain;

import com.project.devreview.model.domain.id.PostTagId;
import jakarta.persistence.*;
import lombok.Getter;

import java.io.Serializable;

@Entity
@IdClass(PostTagId.class)
@Getter
public class PostTag implements Serializable {
    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_id")
    private Tag tag;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id")
    private Post post;
}
