import React, { useEffect } from "react";
import LoginPageComponent from "../../component/user/LoginPageComponent";
import { useSetRecoilState } from "recoil";
import { rc_user_isLoginAtom } from "../../recoil/atoms";
import { useNavigate } from "react-router-dom";
const LoginPageContainer = () => {
    const navigate = useNavigate();
    const setIsLogin = useSetRecoilState(rc_user_isLoginAtom);

    const onLogin = () => {
        setIsLogin((prev) => !prev);
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
    const propDatas = { onLogin, onSignUp, onFindID, onFindPassword };
    return <LoginPageComponent {...propDatas} />;
};

export default LoginPageContainer;
