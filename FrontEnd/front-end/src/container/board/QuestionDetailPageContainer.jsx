import React, { useEffect, useState } from "react";
import QuestionDetailPageComponent from "../../component/board/QuestionDetailPageComponent";
import { useParams } from "react-router-dom";

const questionDummyData = {
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
        content: `
        <img src="https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/redux-logo.png?w=600&ssl=1" "alt="redux-logo" />
        <p>Redux와 MobX는 상태 관리를 위한 라이브러리입니다. Redux는 Flux 아키텍처 패턴을 따르며, 한 번 설정한 상태 구조를 수정하는 것이 쉽지 않아 초기 구성 비용이 높다는 단점이 있습니다. 그러나 코드의 일관성과 예측 가능성이 높아 유지 보수가 쉽다는 장점이 있습니다.</p> <p>반면, MobX는 React에서 지원하는 컴포넌트 수준의 상태 관리 라이브러리입니다. React 컴포넌트를 사용하는 데 필요한 기능만 제공하며, 구성이 단순하고 적은 양의 코드로 구현이 가능합니다. 또한, 자동으로 상태 업데이트를 감지하여 React 컴포넌트에서 업데이트를 처리해주므로 프로그래머가 수동으로 업데이트를 처리하지 않아도 되는 장점이 있습니다.</p> <p>Redux는 대규모 애플리케이션의 복잡성에 대한 대응책으로, MobX는 작은 규모의 애플리케이션에 적합합니다. 따라서, 프로젝트의 크기와 복잡성을 고려하여 선택하는 것이 중요합니다.</p>`,
        author: "Dylan Lee",
        date: "2023-05-04 11:30",
    },
    {
        content: `<p>Redux와 MobX는 모두 상태 관리 라이브러리입니다. Redux는 액션, 리듀서, 스토어 개념이 명확하고, 단일 스토어를 사용하며 예측 가능한 상태 관리를 제공합니다. MobX는 관찰 가능한 상태와 반응형 시스템을 지원합니다. 이러한 차이로 인해 Redux는 큰 규모의 애플리케이션에서 유용하며, MobX는 작은 규모의 애플리케이션에서 적합합니다.</p> <p>Redux를 사용하는 경우 액션 타입, 액션 생성자, 리듀서를 정의하고, 리덕스 스토어를 생성하여 애플리케이션의 상태를 관리합니다. MobX를 사용하는 경우 스토어, 액션, 리액션, 컴퓨티드 값을 정의하여 애플리케이션의 상태를 관리합니다. </p> <p>또한 Redux는 디버깅에 용이하며, 유용한 개발 도구를 많이 지원합니다. 반면 MobX는 테스트하기 쉽고, 간단한 구현으로도 복잡한 기능을 구현할 수 있습니다.</p>`,
        author: "John Doe",
        date: "2023-05-04 11:30",
    },
];

const QuestionDetailPageContainer = () => {
    // http의 url에서 param을 가져오기 위해 useParams() 사용
    const { id } = useParams();
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

    const [questionData, setQuestionData] = useState(questionDummyData);
    const [answerData, setAnswerData] = useState(answerDummyData);

    const [showAnswerEditor, setShowAnswerEditor] = useState(false);
    const onQuestionDelete = () => {
        const isConfirmed = window.confirm(
            "삭제한 질문은 복구할 수 없습니다.\n질문을 삭제하시겠습니까?"
        );

        if (isConfirmed) {
            // 삭제 버튼이 클릭되었을 때 수행할 작업을 이곳에 추가하세요.
            console.log("질문이 삭제되었습니다.");
        }
    };

    const onAnswerDelete = (answerId) => {
        const isConfirmed = window.confirm(
            "삭제한 답변은 복구할 수 없습니다.\n답변을 삭제하시겠습니까?"
        );

        if (isConfirmed) {
            // 삭제 버튼이 클릭되었을 때 수행할 작업을 이곳에 추가하세요.
            console.log("답변이 삭제되었습니다.");
        }
    };

    const onToggleAnswerEditor = () => {
        setShowAnswerEditor(!showAnswerEditor);
    };
    useEffect(() => {
        console.log(id);
    }, [id]);
    const propDatas = {
        questionData,
        answerData,
        modules,
        showAnswerEditor,
        setShowAnswerEditor,
        onQuestionDelete,
        onAnswerDelete,
        onToggleAnswerEditor,
    };
    return <QuestionDetailPageComponent {...propDatas} />;
};

export default QuestionDetailPageContainer;
