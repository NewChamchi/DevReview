import React from "react";
import styled from "styled-components";

const LoginPageComponent = (props) => {
    const { onLogin, onSignUp, onFindID, onFindPassword } = props;
    return (
        <LoginPageComponentBlock>
            <h2>로그인</h2>
            <div className="input-field">
                <label htmlFor="username">아이디</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="input-field">
                <label htmlFor="password">비밀번호</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="buttons">
                <button className="login-button" onClick={onLogin}>
                    로그인
                </button>
                <button className="signup-button" onClick={onSignUp}>
                    회원가입
                </button>
                <button onClick={onFindID}>아이디 찾기</button>
                <button onClick={onFindPassword}>비밀번호 찾기</button>
            </div>
        </LoginPageComponentBlock>
    );
};
const LoginPageComponentBlock = styled.div`
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

    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .login-button,
    .signup-button {
        padding: 10px 20px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .login-button {
        background-color: #1976d2;
        color: white;
    }

    .login-button:hover {
        background-color: #115293;
    }

    .signup-button {
        background-color: #eee;
        color: #333;
    }

    .signup-button:hover {
        background-color: #ccc;
    }
`;
export default LoginPageComponent;
