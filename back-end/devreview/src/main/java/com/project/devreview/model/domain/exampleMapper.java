package com.project.devreview.model.domain;

import com.project.devreview.model.dto.AnswerDTO;

import java.util.ArrayList;
import java.util.List;

public class exampleMapper {
    public AnswerDTO answerToAnswerDto(Answer answer){

        AnswerDTO response = new AnswerDTO(answer);

        return response;

    }

    public List<AnswerDTO> answersToAnswerDto(List<Answer> answers){
        List<AnswerDTO> answerDTOS = new ArrayList<>();

        for(Answer answer : answers){
            answerDTOS.add(answerToAnswerDto(answer));
        }

        return answerDTOS;
    }
}
