import React, { useEffect, useState } from "react";
import QuestionDetailPageComponent from "../../component/board/QuestionDetailPageComponent";
import { useNavigate, useParams } from "react-router-dom";

// chatGPT 질문 시에 사용되는 예시 데이터
// const questionDummyData = {
//     id: 1,
//     type: "chatgpt",
//     title: "자연어 처리에 대한 기본적인 이해",
//     author: "Jane Smith",
//     date: "2023-05-03",
//     tags: ["NLP", "Machine Learning", "AI"],
//     content: `
//       <p>안녕하세요! 최근에 자연어 처리(NLP)에 대해 공부하기 시작했습니다.</p>
//       <p>NLP가 무엇인지, 그리고 기계학습이 어떻게 텍스트 데이터를 이해하는지 궁금합니다.</p>
//       <p>또한, NLP를 위한 가장 효과적인 기계학습 방법론에 대해서도 알고 싶습니다.</p>
//       <p>감사합니다!</p>
//     `,
// };

// const answerDummyData = [
//     {
//         id: 1,
//         content: `
//         <p>자연어 처리(NLP)는 인간이 사용하는 언어를 컴퓨터가 이해하고 처리하는 AI의 한 분야입니다. 이는 텍스트 분류, 감정 분석, 기계 번역, 질문 응답 시스템 등 다양한 어플리케이션에서 사용됩니다.</p>
//         <p>기계학습은 텍스트 데이터를 이해하기 위해 단어, 문장, 문단 등 다양한 단위로 텍스트를 분석합니다. 이러한 텍스트 데이터를 벡터로 변환하여 기계학습 모델이 이해할 수 있는 형태로 만드는 과정을 텍스트 임베딩이라고 합니다.</p>
//         <p>자연어 처리를 위한 가장 효과적인 기계학습 방법론 중 하나는 딥러닝입니다. 특히, Transformer 아키텍처를 기반으로 한 모델들이 NLP 작업에서 뛰어난 성능을 보여주고 있습니다. 예를 들어, BERT, GPT, RoBERTa 등의 모델은 대표적인 Transformer 기반 모델입니다.</p>
//         `,
//         author: "ChatGPT",
//         date: "2023-05-04 11:30",
//         comments: [],
//     },
// ];

// 일반적인 질문 시에 사용되는 예시 데이터
const questionDummyData = {
    id: 1,
    type: "normal",
    title: "React에서 상태 관리 라이브러리 사용 방법",
    author: "Jane Smith",
    date: "2023-05-03",
    tags: ["React", "Redux", "MobX"],
    content: `
      <p>안녕하세요! React 프로젝트를 진행하면서 상태 관리 라이브러리를 사용하려고 합니다.</p>
      <p>Redux와 MobX 중 어떤 것을 사용하는 것이 좋을까요? 각 라이브러리의 장단점에 대해 알려주시면 감사하겠습니다.</p>
      <p>또한, 선택한 라이브러리를 React 프로젝트에 통합하는 방법에 대해서도 조언을 구하고 싶습니다.</p>
      <p>감사합니다!</p>
    `,
};

const answerDummyData = [
    {
        id: 1,
        content: `
        <img src="https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/redux-logo.png?w=600&ssl=1" "alt="redux-logo" />
        <p>Redux와 MobX는 상태 관리를 위한 라이브러리입니다. Redux는 Flux 아키텍처 패턴을 따르며, 한 번 설정한 상태 구조를 수정하는 것이 쉽지 않아 초기 구성 비용이 높다는 단점이 있습니다. 그러나 코드의 일관성과 예측 가능성이 높아 유지 보수가 쉽다는 장점이 있습니다.</p> <p>반면, MobX는 React에서 지원하는 컴포넌트 수준의 상태 관리 라이브러리입니다. React 컴포넌트를 사용하는 데 필요한 기능만 제공하며, 구성이 단순하고 적은 양의 코드로 구현이 가능합니다. 또한, 자동으로 상태 업데이트를 감지하여 React 컴포넌트에서 업데이트를 처리해주므로 프로그래머가 수동으로 업데이트를 처리하지 않아도 되는 장점이 있습니다.</p> <p>Redux는 대규모 애플리케이션의 복잡성에 대한 대응책으로, MobX는 작은 규모의 애플리케이션에 적합합니다. 따라서, 프로젝트의 크기와 복잡성을 고려하여 선택하는 것이 중요합니다.</p>`,
        author: "Dylan Lee",
        date: "2023-05-04 11:30",
        comments: [
            {
                id: 1,
                content:
                    "이 답변은 정말 도움이 되었습니다! Redux와 MobX에 대한 이해가 더 깊어졌어요.",
                author: "Commenter1",
                date: "2023-05-04 12:00",
            },
            {
                id: 2,
                content:
                    "추가 질문이 있습니다. Redux와 MobX 중 어떤 것을 먼저 배우는 것이 좋을까요?",
                author: "Commenter2",
                date: "2023-05-04 12:30",
            },
            {
                id: 3,
                content: "저도 이 답변이 정말 도움이 되었습니다. 감사합니다!",
                author: "Commenter3",
                date: "2023-05-04 12:45",
            },
        ],
    },
    {
        id: 2,
        content: `<p>Redux와 MobX는 모두 상태 관리 라이브러리입니다. Redux는 액션, 리듀서, 스토어 개념이 명확하고, 단일 스토어를 사용하며 예측 가능한 상태 관리를 제공합니다. MobX는 관찰 가능한 상태와 반응형 시스템을 지원합니다. 이러한 차이로 인해 Redux는 큰 규모의 애플리케이션에서 유용하며, MobX는 작은 규모의 애플리케이션에서 적합합니다.</p> <p>Redux를 사용하는 경우 액션 타입, 액션 생성자, 리듀서를 정의하고, 리덕스 스토어를 생성하여 애플리케이션의 상태를 관리합니다. MobX를 사용하는 경우 스토어, 액션, 리액션, 컴퓨티드 값을 정의하여 애플리케이션의 상태를 관리합니다. </p> <p>또한 Redux는 디버깅에 용이하며, 유용한 개발 도구를 많이 지원합니다. 반면 MobX는 테스트하기 쉽고, 간단한 구현으로도 복잡한 기능을 구현할 수 있습니다.</p>`,
        author: "John Doe",
        date: "2023-05-04 11:30",
        comments: [
            {
                id: 1,
                content:
                    "이 답변도 훌륭합니다! 두 라이브러리의 차이점을 명확하게 이해할 수 있었습니다.",
                author: "Commenter4",
                date: "2023-05-04 12:15",
            },
            {
                id: 2,
                content:
                    "Redux는 큰 규모의 애플리케이션에 유용하다는 점이 인상적이었습니다. 감사합니다!",
                author: "Commenter5",
                date: "2023-05-04 12:30",
            },
        ],
    },
];

const QuestionDetailPageContainer = () => {
    // http의 url에서 param을 가져오기 위해 useParams() 사용
    const { id } = useParams();
    const navigate = useNavigate();
    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            ["link", "image"],
            ["clean"],
        ],
    };

    const [isAlertVisible, setIsAlertVisible] = useState(false);

    // data 부분
    const [questionData, setQuestionData] = useState(questionDummyData);
    const [answerData, setAnswerData] = useState(answerDummyData);

    // view에서 쓰이는 상태 부분
    const [newComments, setNewComments] = useState(answerData.map(() => ""));
    const [newAnswer, setNewAnswer] = useState("");
    const [updateAnswer, setUpdateAnswer] = useState("");

    // boolean이나 숫자를 통하여 토글링을 관리하는 부분
    const [isWritingAnswer, setIsWritingAnswer] = useState(false);
    const [updateAnswerIndex, setUpdateAnswerIndex] = useState(null);

    // 이벤트 핸들러 부분
    const onQuestionUpdate = () => {
        navigate("/questionUpdate");
    };

    const onQuestionDelete = (answerId) => {
        const isConfirmed = window.confirm(
            "삭제한 질문은 복구할 수 없습니다.\n질문을 삭제하시겠습니까?"
        );

        if (isConfirmed) {
            // 질문 삭제와 관련된 로직을 추가하면 됩니다.
            console.log("질문이 삭제되었습니다.");
            // 질문 삭제 이후에는 페이지가 사라지므로 navigate를 통해 페이지를 이동시켜줍니다.
            navigate("/QuestionList");
        }
    };

    const onAnswerUpdate = (answerId) => {
        const newAnswerData = answerData.map((answer) => {
            if (answer.id === answerId) {
                return {
                    ...answer,
                    content: updateAnswer,
                };
            }
            return answer;
        });
        setAnswerData(newAnswerData);
        setUpdateAnswerIndex(null);
        setUpdateAnswer("");
    };

    const onAnswerDelete = (answerId) => {
        const isConfirmed = window.confirm(
            "삭제한 답변은 복구할 수 없습니다.\n답변을 삭제하시겠습니까?"
        );

        if (isConfirmed) {
            const newAnswerData = answerData.filter(
                (answer) => answer.id !== answerId
            );
            setAnswerData(newAnswerData);
            console.log("답변이 삭제되었습니다.");
        }
    };

    const onToggleAnswerEditor = () => {
        setIsWritingAnswer(!isWritingAnswer);
    };

    const onChangeCommentInput = (event, index) => {
        setNewComments(
            newComments.map((comment, i) =>
                i === index ? event.target.value : comment
            )
        );
    };

    const onSubmitComment = (event, index) => {
        event.preventDefault();
        if (newComments[index].trim() === "") {
            alert("댓글을 작성해주세요.");
            return;
        }
        const newAnswerData = [...answerData];
        newAnswerData[index].comments.push({
            id: newAnswerData[index].comments.length + 1,
            content: newComments[index],
            author: "Commenter(hardcoded)",
            date: new Date().toISOString().slice(0, 16).replace("T", " "),
        });
        setAnswerData(newAnswerData);

        setNewComments(
            newComments.map((comment, i) => (i === index ? "" : comment))
        );
        console.log("댓글이 등록되었습니다.");
    };

    const onSubmitAnswer = () => {
        // answerData에서 id를 비교한 뒤, 가장 큰 값을 구합니다. answerData가 비어있으면 0을 반환합니다.
        const maxID = Math.max(...answerData.map((answer) => answer.id), 0);

        const answer = {
            id: maxID + 1,
            content: newAnswer,
            author: "Answerer(hardcoded)",
            date: new Date().toISOString().slice(0, 16).replace("T", " "),
            comments: [],
        };

        setAnswerData([...answerData, answer]);
        setNewAnswer("");
        setIsWritingAnswer(false);
        console.log("답변이 등록되었습니다.");
    };

    useEffect(() => {
        console.log("updateAnswerIndex: ", updateAnswerIndex);
    }, [updateAnswerIndex]);

    const propDatas = {
        questionData,
        answerData,
        modules,
        newComments,
        newAnswer,
        updateAnswer,
        isWritingAnswer,
        updateAnswerIndex,
        setNewAnswer,
        setUpdateAnswer,
        setIsWritingAnswer,
        setUpdateAnswerIndex,
        onQuestionUpdate,
        onQuestionDelete,
        onAnswerUpdate,
        onAnswerDelete,
        onToggleAnswerEditor,
        onChangeCommentInput,
        onSubmitComment,
        onSubmitAnswer,
    };
    return <QuestionDetailPageComponent {...propDatas} />;
};

export default QuestionDetailPageContainer;
