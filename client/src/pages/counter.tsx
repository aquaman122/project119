import React from 'react';
import type { RootState } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import { add, sub } from '../store/counter';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(add(3))}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(sub(1))}>
          Decrement
        </button>
      </div>
    </div>
  );
}