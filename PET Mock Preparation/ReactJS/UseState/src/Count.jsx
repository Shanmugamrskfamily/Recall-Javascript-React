import React, { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if(count<=0){
            alert("The value can't be below '0'!");
            return;
        }
        setCount(count - 1);
    };

    return (
        <div>
            Count: {count}<br />
            <button style={{ margin: '10px' }} onClick={()=>setCount(count+1)}>
                Increment
            </button>
            <button onClick={()=>{
                if(count<=0){
                    alert("The value can't be below '0'!");
                    return;
                }
                setCount(count-1)}}>Decrement</button>
        </div>
    );
}

export default Count;
