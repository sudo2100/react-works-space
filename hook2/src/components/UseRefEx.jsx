import { useState, useRef } from "react";

const UseRefEx = () => {
    const [count, setCount] = useState(0);

    // 참조 객체를 생성, 0으로 초기화
    const countRef = useRef(0);

    console.log("렌더링...");
    console.log(countRef); // {current: 0}
    
    // 1증가 시키는 함수
    const increaseCount = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h2>useRef() 실습</h2>
            <p>State: {count} </p>
            <p>Ref: {countRef.current}</p>

            <button onClick={increaseCount}>State 증가</button>
            <button>Ref 증가</button>
        </div>
    )
}

export default UseRefEx;