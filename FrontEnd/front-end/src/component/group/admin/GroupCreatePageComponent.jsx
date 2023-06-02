import React, { useState } from "react";
import styled from "styled-components";

const GroupCreatePageComponent = (props) => {
    const {} = props;

    const [groupName, setGroupName] = useState("");
    const [groupDescription, setGroupDescription] = useState("");

    const handleCreate = () => {
        console.log("Group Name: ", groupName);
        console.log("Group Description: ", groupDescription);
        // 여기에서 모임 생성 로직을 구현하시면 됩니다.
    };

    return (
        <GroupCreatePageComponentBlock>
            <h2>모임 생성</h2>
            <StyledLabel>모임명</StyledLabel>
            <StyledInput
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
            />
            <StyledLabel>모임 설명</StyledLabel>
            <StyledTextArea
                value={groupDescription}
                onChange={(e) => setGroupDescription(e.target.value)}
            />
            <StyledButton onClick={handleCreate}>생성</StyledButton>
        </GroupCreatePageComponentBlock>
    );
};

const GroupCreatePageComponentBlock = styled.div`
    width: 60%; // 너비 조정
    max-width: 60%; // 너비 조정
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 135px;
    padding: 20px; // 상하 여백 추가
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    text-align: left;
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px; // 상하 여백 추가
    border: 1px solid #ddd;
    border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px; // 상하 여백 추가
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 300px;
`;

const StyledButton = styled.button`
    display: block;
    padding: 10px 20px;
    margin-top: 20px;
    background: #4b67ea;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background: #4058b5;
    }
`;

export default GroupCreatePageComponent;
