import React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarComponent = (props) => {
    const { isLogin, location, setIsLogin } = props;
    return (
        <NavbarComponentBlock>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
                <RouterLink
                    to="/"
                    className="navbar-brand d-flex align-items-center"
                >
                    <h1 className="m-0">DevReview</h1>
                </RouterLink>
                <button
                    type="button"
                    className="navbar-toggler me-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink
                            to="/questionList"
                            className="nav-item nav-link"
                            activeClassName="active"
                            exact
                        >
                            Q&A
                        </NavLink>
                        <NavLink
                            to="/meetup"
                            className="nav-item nav-link"
                            activeClassName="active"
                            exact
                        >
                            모임
                        </NavLink>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                마이페이지
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <NavLink
                                        to="/myQuestion"
                                        className="dropdown-item"
                                        activeClassName="active"
                                    >
                                        내 질문
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/myAnswer"
                                        className="dropdown-item"
                                        activeClassName="active"
                                    >
                                        내 답변
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/myProfile"
                                        className="dropdown-item"
                                        activeClassName="active"
                                    >
                                        내 정보 조회/수정
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/changePassword"
                                        className="dropdown-item"
                                        activeClassName="active"
                                    >
                                        비밀번호 변경
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        {isLogin ? (
                            <NavLink
                                to="/"
                                className="nav-item nav-link"
                                activeClassName="active"
                                onClick={() => setIsLogin(false)}
                                exact
                            >
                                로그아웃
                            </NavLink>
                        ) : (
                            <NavLink
                                to="/login"
                                className="nav-item nav-link"
                                activeClassName="active"
                                exact
                            >
                                로그인
                            </NavLink>
                        )}
                    </div>
                </div>
            </nav>
        </NavbarComponentBlock>
    );
};

const NavbarComponentBlock = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default NavbarComponent;
