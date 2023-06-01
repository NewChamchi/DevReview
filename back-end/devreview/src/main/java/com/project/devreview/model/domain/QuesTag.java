package com.project.devreview.model.domain;

import com.project.devreview.model.domain.id.QuestionTagId;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "question_tag")
//@IdClass(QuestionTagId.class)
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class QuesTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "questag_id")
    private Long id;
//    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tag_id")
    private Tag tag;

//    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ques_id")
    private Question question;

    @Builder
    public QuesTag(Tag tag, Question questsion){
        this.tag = tag;
        this.question = questsion;
    }
}
