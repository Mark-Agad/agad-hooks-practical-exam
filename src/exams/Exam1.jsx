import { useState } from 'react';

function Exam1() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(5);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));
  const reset = () => setCount(0);
  
  let status;
  const atTarget = count >= target;
if (count >= target) {
  status = 'Target reached';
} else if (count === 0) {
  status = 'Not started';
} else {
  status = 'In progress';
}


const addTwo = () => {
  setCount((c) => c + 1);
  setCount((c) => c + 1);
};
  return (
    <div>
      <h1>Smart Task Counter</h1>
      <p>Completed: {count}</p>
      <p>Status: {status}</p>
      
      <label>
        Target:{' '}
        <input
          type="number"
          min="1"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
        />
      </label>
      <div>
      <button onClick={increment} disabled={atTarget}>Increment</button>
       <button onClick={addTwo} disabled={atTarget}>Plus Two</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        
      </div>
    </div>
  );
}

export default Exam1;