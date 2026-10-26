import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "../store/counterSlice";

const CounterReducer = () => {
    // store의 state에서 count 값을 가져옴
    const count = useSelector(state => state.counter.count);

    // dispatch 함수 가져와서 액션을 전달함
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Counter</h2>
            <h3>현재 숫자: {count}</h3>
            <button onClick={() =>
                dispatch(increament())}>증가</button>
            <button onClick={() =>
                dispatch(decreament())}>감소</button>
        </div>
    )
}

export default CounterReducer;