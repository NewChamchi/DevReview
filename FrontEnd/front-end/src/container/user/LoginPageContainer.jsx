import React, { useEffect, useState } from "react";
import LoginPageComponent from "../../component/user/LoginPageComponent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    rc_user_isLoginAtom,
    rc_user_informationAtom,
} from "../../recoil/atoms";
import { useNavigate } from "react-router-dom";
const LoginPageContainer = () => {
    const navigate = useNavigate();
    const setIsLogin = useSetRecoilState(rc_user_isLoginAtom);
    const setLoginUser = useSetRecoilState(rc_user_informationAtom);
    const loginUser = useRecoilValue(rc_user_informationAtom);
    const [username, setUsername] = useState("");
    const onLogin = (username) => {
        setIsLogin((prev) => !prev);
        console.log(username);
        setLoginUser({
            id: 2,
            name: username,
        });
        navigate("/");
    };

    const onSignUp = () => {
        navigate("/signUp");
    };

    const onFindID = () => {
        navigate("/findID");
    };

    const onFindPassword = () => {
        navigate("/findPassword");
    };
    useEffect(() => {}, []);

    useEffect(() => {
        console.log("loginUser :", loginUser);
    }, [loginUser]);
    const propDatas = {
        username,
        setUsername,
        onLogin,
        onSignUp,
        onFindID,
        onFindPassword,
    };
    return <LoginPageComponent {...propDatas} />;
};

export default LoginPageContainer;
