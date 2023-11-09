const redux = require('redux');


// reducer 함수 : store 생성된 후 실행
const counterReducer = (state = { counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }
    
    return state;
};

// redux store 생성
const store = redux.createStore(counterReducer); 
console.log(store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

// action 실행
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});