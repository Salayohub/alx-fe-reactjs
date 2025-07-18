import { useState } from 'react';

function Counter() {
   const [count, setCount] = useState(0); 

   return (
    <div style={{backgroundColor: 'white', padding: '20px 0px 50px 0px',marginBottom:'10px'}}>
        <h3 style={{color: 'black', textDecoration: 'underline'}}>Use State Counter</h3>
        <p style={{color: 'black'}}>Current Count: {count} </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
   );
}

export default Counter;