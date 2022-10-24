import { useState } from "react"

export const useCounter = (initialState = 0) => {
    const[counterState, setCounterState] = useState(initialState);
    
    const increase = () => {
        setCounterState(counterState + 1);
    }

    const decrease = () => {
        setCounterState(counterState - 1);
    }

    const reset = () => {
        setCounterState(0);
    }

    const increaseByNumber = (numberToIncrement) => {
        setCounterState(counterState + numberToIncrement)
    }

    return {
        counterState,
        increase,
        decrease,
        reset,
        increaseByNumber
    }
}

export default useCounter;