import React, { useState } from 'react';
 
const CounterHooks = () => {
  const [count, updateCount] = useState(0); 
  const handleClick = () => updateCount(count + 1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
 
export default CounterHooks;
