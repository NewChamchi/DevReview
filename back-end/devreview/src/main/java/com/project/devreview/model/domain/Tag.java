package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long id;

    @Column(name = "tag_name")
    private String name;

//    @OneToMany(mappedBy = "tag", cascade = CascadeType.ALL)
//    private List<QuesTag> quesTagList = new ArrayList<>();

    @Builder
    public Tag(Long id, String name){
        this.id = id;
        this.name = name;
    }

    @Builder
    public Tag(String name){
        this.name = name;
    }


}
