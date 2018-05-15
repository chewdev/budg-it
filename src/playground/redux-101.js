import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions, output determined by input and doesn't change data outside
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
            count: state.count + action.incrementBy
            };
        case 'DECREMENT': 
            return {
            count: state.count - action.decrementBy
            };
        case 'RESET': return {
            count: 0
        };
        case 'SET': 
            return {
                count: action.count
            };
        default: 
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 40 }));


//console.log(store);
// store.dispatch(incrementCount({ incrementBy: 5 }));

// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });

// store.subscribe(() => {
//     console.log(store.getState());
// })

// const getCount = () => store.subscribe(() => store.getState().count);

// const increment = () => store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// const decrement = () => store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// const reset = () => store.dispatch({
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
// const getCount = () => store.dispatch({
//     type: "GET_COUNT"
// });

// const Button = () => (
//     <div>
//         <button 
//             onClick={increment} 
//         >
//             +1
//         </button>
//         <button
//             onClick={decrement}
//         >
//             -1
//         </button>
//         <button
//             onClick={reset}
//         >
//             Reset
//         </button>
//         <p>
//             count
//         </p>
//     </div>
// );

// ReactDOM.render(<Button />, document.getElementById('app'));

