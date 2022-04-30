import { useState } from 'react';

export function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    return setNumber(number + 1);
  }

  return (
    <div>
      <h2>{number}</h2>
      <button type="button" onClick={increment}>
        Aumentar em 1
      </button>
    </div>
  );
}
