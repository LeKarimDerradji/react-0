import {useReducer, useState} from 'react';
import NumberInput from './NumberInput';


const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + state.step}
        case 'DECREMENT':
            return {...state, count: state.count - state.step}
        case 'SET_STEP':
            return {...state, step: action.step}
        case 'RESET':
            return {...state, step: 0}
        default:
            throw new Error(`Unandled action ${action.type} in CountReducer`)
    }
}


const initialCounterState = {
    count: 0,
    step: 1, 
}



function Counter ({initialStep, onCount, NbOp, isDisabled}) {
    const [counterState, dispatchCounter]  = useReducer(counterReducer, {...initialCounterState, step: initialStep})

    const handleOnClick = () => {
        dispatchCounter({ type: 'INCREMENT' })
        onCount((cur) => Number(cur) + 1)
    }

    const handleDecrement = () => {
        dispatchCounter({ type: 'DECREMENT' })
        onCount((cur) => Number(cur) + 1)
    }

    const handleStepChange = (event) => {
        if (!isNaN(event.target.value)) {
            dispatchCounter({type: 'SET_STEP', step: Number(event.target.value)})
       }
    }

    const handleReset = () => {
        dispatchCounter({
          type: 'RESET',
        })
      }



    return (
        <>
        <p>Number of operation : {NbOp}</p>
        <p>count: {counterState.count} <button onClick={handleReset}>reset</button></p>
        <button onClick={handleOnClick} disabled={isDisabled}>+</button>
        <button onClick={handleDecrement} disabled={isDisabled}>-</button>
        <NumberInput 
        handleStepChange={handleStepChange} 
        step="step"
        id={counterState.step}
        value={counterState.step}
        type="number"
        isDisabled={isDisabled}></NumberInput>
        </>
    )
}

export default Counter;