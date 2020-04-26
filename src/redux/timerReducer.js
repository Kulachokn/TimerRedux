import {combineReducers} from "redux";

const valueReducer = (state = 0, {type, payload}) => {
    switch (type) {
        case 'timer/increment':
            return state + payload.value;
        case 'timer/decrement':
            return state - payload.value;
        default:
            return state

    }
};

const stepReducer = (state = 5, {type, payload}) => {
    switch (type) {
        case 'timer/changeStep':
            return payload.step;

        default:
            return state
    }
};

export default combineReducers({
    value: valueReducer,
    step: stepReducer
})

// const initState = {
//     value: 0,
//     step: 0
// };

// const timerReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'timer/increment':
//             return {
//                 ...state,
//                 value: state.value + action.payload.value
//             };
//
//         case 'timer/decrement':
//             return {
//                 ...state,
//                 value: state.value - action.payload.value
//             };
//
//         default:
//             return state
//     }
// };