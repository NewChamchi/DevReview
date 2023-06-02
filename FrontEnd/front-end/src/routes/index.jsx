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
import GroupListPage from "../page/group/GroupListPage";
import GroupPostListPage from "../page/group/post/GroupPostListPage";
import GroupPostCreatePage from "../page/group/post/GroupPostCreatePage";
import GroupMainPage from "../page/group/GroupMainPage";
import GroupExilePage from "../page/group/admin/GroupExilePage";
import GroupCreatePage from "../page/group/admin/GroupCreatePage";
import GroupManagePage from "../page/group/admin/GroupManagePage";
import GroupPostPage from "../page/group/post/GroupPostPage";

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
            <Route path="/groupList" element={<GroupListPage />} />
            <Route path="/groupMain/:id" element={<GroupMainPage />} />
            <Route path="/groupPostList/:id" element={<GroupPostListPage />} />
            <Route path="/groupCreatePost" element={<GroupPostCreatePage />} />
            <Route path="/groupPost/:id" element={<GroupPostPage />} />
            <Route path="/groupExile/:id" element={<GroupExilePage />} />
            <Route path="/groupCreate" element={<GroupCreatePage />} />
            <Route path="/groupManage/:id" element={<GroupManagePage />} />
            <Route path="*" element={<NotFoundError />} />
        </Routes>
    );
};

export default Switch;
