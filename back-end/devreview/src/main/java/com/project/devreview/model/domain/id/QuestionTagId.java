package com.project.devreview.model.domain.id;


import java.io.Serializable;

public class QuestionTagId implements Serializable {
    private long tag;
    private long question;

    public QuestionTagId(){}
    public QuestionTagId(long tag_id, long ques_id)
    {
        this.tag = tag_id;
        this.question = ques_id;
    }
}
