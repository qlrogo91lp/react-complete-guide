import { createStore } from 'redux';

// State 객체 초기화
const initialState = { counter: 0, showCounter: true };

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

export default store;