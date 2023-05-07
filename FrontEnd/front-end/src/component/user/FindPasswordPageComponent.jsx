import React from "react";
import styled from "styled-components";

const FindPasswordPageComponent = (props) => {
    const {} = props;
    return (
        <FindPasswordPageComponentBlock>
            <h2>비밀번호 찾기</h2>
            <div className="input-field">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" />
            </div>
            <button className="send-button">발송</button>
        </FindPasswordPageComponentBlock>
    );
};

const FindPasswordPageComponentBlock = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        margin-bottom: 30px;
    }

    .input-field {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
    }

    label {
        display: block;
        text-align: left;
        margin-bottom: 5px;
    }

    input {
        padding: 10px;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    .send-button {
        padding: 10px 20px;
        background-color: #1976d2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .send-button:hover {
        background-color: #115293;
    }
`;

export default FindPasswordPageComponent;
