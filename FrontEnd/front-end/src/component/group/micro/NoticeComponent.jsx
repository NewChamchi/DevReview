import React, { useState } from "react";
import styled from "styled-components";

const NoticeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const NoticeTitle = styled.h2`
    margin: 0;
    cursor: pointer;
`;

const NoticeContent = styled.p`
    margin: 0;
`;

const NoticeComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const title = "공지사항 제목";
    const content = "공지사항 내용...";

    return (
        <NoticeWrapper>
            <NoticeTitle onClick={toggleOpen}>{title}</NoticeTitle>
            {isOpen && <NoticeContent>{content}</NoticeContent>}
        </NoticeWrapper>
    );
};

export default NoticeComponent;
