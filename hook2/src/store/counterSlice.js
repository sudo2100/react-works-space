import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 }

// 액션과 리듀서를 생성
const counterSlice = createSlice({
    // 필수 속성: name, initialState, reducers
    name: 'counter',
    initialState,
    reducers:{
        increament: (state) => { state.count = state.count + 1},
        decreament: (state) => { state.count = state.count - 1},
    }
})

// 액션과 리듀서 내보내기
export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;