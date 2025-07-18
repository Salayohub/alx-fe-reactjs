import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
         <h1 style={{color:'orange'}}> State Usage</h1>
      <p style={{color: 'black',backgroundColor:'white',padding:'8px'}}>You clicked {count} times</p>
      <button style={{backgroundColor:'red',}} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Counter;