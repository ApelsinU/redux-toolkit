import React, { useState } from 'react'
import './counter.sass'

import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  clean,
  incrementAsync,
} from '../../features/counter/counterSlice'

export default function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  const [selectedValue, setSelectedValue] = useState(0)

  return (
    <>
      <div className="counter">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <div className="result">{count}</div>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="counter">
        <input
          type="number"
          className="counter-input"
          onChange={(e) => setSelectedValue(Number(e.target.value))}
        />
        <button
          className="button wide"
          aria-label="Increment value by Amount"
          onClick={(e) => dispatch(incrementByAmount(selectedValue))}
        >
          Increment by
        </button>
      </div>
      <div className="counter">
        <button
          className="button wide"
          aria-label="Clean"
          onClick={() => dispatch(clean())}
        >
          Clean
        </button>
      </div>
      <div className="counter">
        <button
          className="button wide"
          aria-label="Increment Async"
          onClick={() => dispatch(incrementAsync(selectedValue))}
        >
          Increment Async
        </button>
      </div>
    </>
  )
}