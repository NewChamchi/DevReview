package com.project.devreview.model.domain;

import com.project.devreview.model.domain.id.PostTagId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity(name = "post_tag")
//@IdClass(PostTagId.class)
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "posttag_id")
    private Long id;
//    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_id")
    private Tag tag;

//    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id")
    private Post post;

    @Builder
    public PostTag(Tag tag, Post post){
        this.tag = tag;
        this.post = post;
    }

    public void setTag(Tag tag){
        this.tag = tag;
    }
    public void setPost(Post post){
        this.post = post;
    }
}
