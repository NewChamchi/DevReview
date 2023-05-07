import React from "react";
import styled from "styled-components";

const UnregisterPageComponent = (props) => {
    const {} = props;
    return (
        <UnregisterPageComponentBlock>
            <h2>회원탈퇴</h2>
            <div className="input-field">
                <label htmlFor="password">비밀번호 확인</label>
                <input type="password" id="password" name="password" />
            </div>
            <button className="unregister-button">회원탈퇴</button>
        </UnregisterPageComponentBlock>
    );
};

const UnregisterPageComponentBlock = styled.div`
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

    .unregister-button {
        padding: 10px 20px;
        background-color: #d32f2f;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 20px;
        transition: background-color 0.2s;
    }

    .unregister-button:hover {
        background-color: #9a0007;
    }
`;

export default UnregisterPageComponent;
