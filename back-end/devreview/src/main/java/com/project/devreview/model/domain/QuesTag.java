package com.project.devreview.model.domain;

import com.project.devreview.model.domain.id.QuesTagId;
import jakarta.persistence.*;
import lombok.Getter;

@Entity
@IdClass(QuesTagId.class)
@Getter
public class QuesTag {
    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_id")
    private Tag tag;

    @Id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ques_id")
    private Question question;


}
