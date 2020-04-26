import React from "react";
import {connect} from "react-redux";
import timerActions from "../redux/timerActions";
import css from "../components/Timer.module.css";

const Timer = ({value, step, onIncrement, onDecrement}) => (
    <div className={css.container}>
        <button
            type="button"
            className={css.button}
            onClick={() => onDecrement(step)}
        >
            &#8722;
        </button>

        <div className={css.value}>{value} minutes</div>

        <button
            type="button"
            className={css.button}
            onClick={() => onIncrement(step)}
        >
            &#43;
        </button>
    </div>
);

const mapStateToProps = state => {
    return {
        value: state.timer.value,
        step: state.timer.step
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onIncrement: (value) => dispatch(timerActions.increment(value)),
//         onDecrement: (value) => dispatch(timerActions.decrement(value))
//     };
// };

const mapDispatchToProps = {
    onIncrement: timerActions.increment,
    onDecrement: timerActions.decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);