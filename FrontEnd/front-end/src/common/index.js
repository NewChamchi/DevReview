export const onEdit = (event, setValue) => {
    // 왜 event.event가 nativeEvent냐면 devExtreme에서 event를 감싸서 보내주기 때문
    // native event란 React 프레임워크에서 제공하는 이벤트 객체가 아닌 브라우저에서 제공하는 이벤트 객체를 의미한다.
    const nativeEvent = event.event;

    if (
        (nativeEvent.key === "Enter" && !nativeEvent.shiftKey) ||
        nativeEvent.key === "Escape"
    ) {
        setValue(event.component.option("value"));
        event.component.blur();
    }
};

/**
 * 배열 요소를 수정하는 함수입니다.
 *
 * @param {object} event - 이벤트 객체
 * @param {string} value - 수정할 값
 * @param {function} setValue - 값을 설정하는 함수
 * @param {number} index - 수정할 배열 요소의 인덱스
 */
export const onEditForArray = (event, value, setValue, index) => {
    const nativeEvent = event.event;

    if (
        (nativeEvent.key === "Enter" && !nativeEvent.shiftKey) ||
        nativeEvent.key === "Escape"
    ) {
        // Enter만 눌렸을 때 처리
        setValue(index, value);
        event.component.blur();
    }
};

/**
 * 객체 요소를 수정하는 함수입니다.
 *
 * @param {object} event - 이벤트 객체
 * @param {string} value - 수정할 값
 * @param {function} setValue - 값을 설정하는 함수
 * @param {object} object - 수정할 객체
 * @param {string} key - 수정할 객체 요소의 키
 *
 */
export const onEditForObject = (event, value, setValue, object, key) => {
    const nativeEvent = event.event;

    if (
        (nativeEvent.key === "Enter" && !nativeEvent.shiftKey) ||
        nativeEvent.key === "Escape"
    ) {
        // Enter만 눌렸을 때 처리
        setValue({
            ...object,
            [key]: value,
        });
        event.component.blur();
    }
};
