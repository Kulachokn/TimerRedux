import React from 'react';
import Timer from "./Timer";
import StepSelector from "./stepSelector";


const stepOptions = [5, 10, 15, 20, 25, 30];

function App() {
    return (
        <>
            <Timer />
            <StepSelector options={stepOptions}/>
        </>
    );
}

export default App;
