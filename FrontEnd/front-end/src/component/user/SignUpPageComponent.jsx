import React from "react";
import styled from "styled-components";

const SignupPageComponent = (props) => {
    const {} = props;
    return (
        <SignupPageComponentBlock>
            <h2>회원가입</h2>
            <div className="input-field">
                <label htmlFor="username">아이디</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="input-field">
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="input-field">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" />
            </div>
            <div className="input-field">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" />
            </div>
            <button className="signup-button">회원가입 완료</button>
        </SignupPageComponentBlock>
    );
};

const SignupPageComponentBlock = styled.div`
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

    .signup-button {
        padding: 10px 20px;
        background-color: #1976d2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 20px;
        transition: background-color 0.2s;
    }

    .signup-button:hover {
        background-color: #115293;
    }
`;

export default SignupPageComponent;
