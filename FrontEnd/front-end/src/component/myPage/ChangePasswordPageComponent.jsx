import React from "react";
import styled from "styled-components";
const ChangePasswordPageComponent = (props) => {
    const {} = props;
    return (
        <ChangePasswordPageComponentBlock>
            <h2>비밀번호 수정</h2>
            <div className="input-field">
                <label htmlFor="currentPassword">현재 비밀번호</label>
                <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                />
            </div>
            <div className="input-field">
                <label htmlFor="newPassword">새 비밀번호</label>
                <input type="password" id="newPassword" name="newPassword" />
            </div>
            <div className="input-field">
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                />
            </div>
            <button className="update-button">수정</button>
        </ChangePasswordPageComponentBlock>
    );
};
const ChangePasswordPageComponentBlock = styled.div`
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

    .update-button {
        padding: 10px 20px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 20px;
        transition: background-color 0.2s;
    }

    .update-button:hover {
        background-color: #087f23;
    }
`;
export default ChangePasswordPageComponent;
