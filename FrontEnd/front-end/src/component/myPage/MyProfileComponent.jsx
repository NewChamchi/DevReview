import React from "react";
import styled from "styled-components";

const MyProfileComponent = (props) => {
    const {} = props;
    return (
        <MyProfileComponentBlock>
            <h2>회원정보 수정 및 조회</h2>
            <div className="input-field">
                <label htmlFor="username">아이디</label>
                <input type="text" id="username" name="username" readOnly />
            </div>
            <div className="input-field">
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" />
            </div>
            <div className="input-field">
                <label htmlFor="email">이메일</label>
                <input type="email" id="email" name="email" />
            </div>
            <button className="update-button">수정</button>
        </MyProfileComponentBlock>
    );
};

const MyProfileComponentBlock = styled.div`
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

    input[readonly] {
        background-color: #f1f1f1;
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

export default MyProfileComponent;
