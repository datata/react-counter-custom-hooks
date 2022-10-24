import { useState } from "react"

export const useCounter = (initialState = 0) => {
    const[counterState, setCounterState] = useState(initialState);
    
    const increase = (numberToIncrement = 1) => {
        setCounterState(counterState + numberToIncrement);
    }

    const decrease = (numberToIncrement = 1) => {
        setCounterState(counterState - numberToIncrement);
    }

    const reset = () => {
        setCounterState(0);
    }

    return {
        counterState,
        increase,
        decrease,
        reset,
    }
}

export default useCounter;