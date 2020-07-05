import React, { useState } from 'react';
 
const Counter2 = () => {
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
 
export default Counter2;
