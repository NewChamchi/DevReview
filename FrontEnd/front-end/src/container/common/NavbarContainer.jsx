import React from "react";
import NavbarComponent from "../../component/common/NavbarComponent";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { rc_user_isLoginAtom } from "../../recoil/atoms";

const NavbarContainer = () => {
    const [isLogin, setIsLogin] = useRecoilState(rc_user_isLoginAtom);
    const location = useLocation();
    const propDatas = { isLogin, location, setIsLogin };
    return <NavbarComponent {...propDatas} />;
};

export default NavbarContainer;
