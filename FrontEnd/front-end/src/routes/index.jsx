import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundError from "../page/NotFoundError";
import MainPage from "../page/MainPage";
import LoginPage from "../page/user/LoginPage";
import SignUpPage from "../page/user/SignUpPage";
import UnregisterPage from "../page/user/UnregisterPage";
import ChangePasswordPage from "../page/myPage/ChangePasswordPage";
import FindIDPage from "../page/user/FindIDPage";
import FindPasswordPage from "../page/user/FindPasswordPage";
import QuestionListPage from "../page/board/QuestionListPage";
import QuestionCreatePage from "../page/board/QuestionCreatePage";
import QuestionDetailPage from "../page/board/QuestionDetailPage";
import QuestionUpdatePage from "../page/board/QuestionUpdatePage";
import MyQuestionPage from "../page/myPage/MyQuestionPage";
import MyAnswerPage from "../page/myPage/MyAnswerPage";
import MyProfilePage from "../page/myPage/MyProfilePage";

const Switch = () => {
    return (
        <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/unregister" element={<UnregisterPage />} />
            <Route path="/findID" element={<FindIDPage />} />
            <Route path="/findPassword" element={<FindPasswordPage />} />

            <Route path="/questionList" element={<QuestionListPage />} />
            <Route path="/questionCreate" element={<QuestionCreatePage />} />
            <Route
                path="/questionDetail/:id"
                element={<QuestionDetailPage />}
            />
            <Route path="/questionUpdate" element={<QuestionUpdatePage />} />
            <Route path="/myQuestion" element={<MyQuestionPage />} />
            <Route path="/myAnswer" element={<MyAnswerPage />} />
            <Route path="/myProfile" element={<MyProfilePage />} />
            <Route path="/changePassword" element={<ChangePasswordPage />} />
            <Route path="*" element={<NotFoundError />} />
        </Routes>
    );
};

export default Switch;
