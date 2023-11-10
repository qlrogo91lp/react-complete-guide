import { createSlice } from '@reduxjs/toolkit';

// State 객체 초기화
const initialCounterState = { counter: 0, showCounter: true };

// Redux toolkit 사용한 방법
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggelCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// Redux toolkit에 의해서 모든 method들이 생성됨
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;