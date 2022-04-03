import { useState } from 'react';
import { factorialOf } from './Example5';

export default function NotMemoized() {
  const [number, setNumber] = useState(1);

  const [inc, setInc] = useState(0);

  const factorial = factorialOf(number);

  function onChange(event) {
    setNumber(Number(event.target.value));
  }

  function onClick() {
    setInc(i => i + 1);
  }

  return (
    <div>
      <h2>Not Memoized</h2>
      Factorial of
      <input
        type="number"
        value={number}
        onChange={onChange}
        className="factorial-input"
      />
      is {factorial}
      <br />
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
