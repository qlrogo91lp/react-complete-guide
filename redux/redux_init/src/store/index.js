import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({ 
    reducer: { counter: counterReducer, auth: authReducer },  
});

export default store;

/*
// Toolkit 사용안한 버전
const counterReducer = (state = initialState, action) => {
    // 항상 새로운 State 객체를 생성해서 return 할 것
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter // 현재 값 그대로 유지
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter // 현재 값 그대로 유지
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter // 현재 값 그대로 유지
        }
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter // 현재 값 그대로 유지
        }
    }

    return state;
};

const store = createStore(counterReducer);

*/