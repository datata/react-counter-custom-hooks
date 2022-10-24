import React, { useState } from 'react'
import './counter.css';
import  useCounter  from "../customHooks/useCounter.js";

export const counter = () => {
    const { counterState, increase, decrease, reset, increaseByNumber } = useCounter(10);

    return (
        <div>
            <h1>
                {counterState}
            </h1>
            <button onClick={() => increase()}>+</button>
            <button onClick={() => decrease()}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
