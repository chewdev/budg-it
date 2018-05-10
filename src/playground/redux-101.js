import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    console.log(state);
    switch (action.type) {
        case 'INCREMENT': return {
            count: state.count + 1
        };
        case 'DECREMENT': return {
            count: state.count - 1
        };
        case 'RESET': return {
            count: 0
        };
        default: 
            return state;
    }
});

console.log(store);
const getCount = () => store.getState().count;

const increment = () => store.dispatch({
    type: 'INCREMENT'
});

const decrement = () => store.dispatch({
    type: 'DECREMENT'
});

const reset = () => store.dispatch({
    type: 'RESET'
});

// const getCount = () => store.dispatch({
//     type: "GET_COUNT"
// });

const Button = () => (
    <div>
        <button 
            onClick={increment} 
        >
            +1
        </button>
        <button
            onClick={decrement}
        >
            -1
        </button>
        <button
            onClick={reset}
        >
            Reset
        </button>
        <p>{getCount()}</p>
    </div>
);

ReactDOM.render(<Button />, document.getElementById('app'));

