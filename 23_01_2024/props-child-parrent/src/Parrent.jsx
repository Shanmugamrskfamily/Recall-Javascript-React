import React, { useState } from 'react'
import Child from './Child';

function Parrent() {
    const [messageFromGrandChild,setmessageFromGrandChild]=useState('');
    const handleMessageFromGrandChild=(message)=>{
        setmessageFromGrandChild(message);
    }
  return (
    <div>
        <h1>Parrent</h1>
        <p>Message From Grandchild: {messageFromGrandChild}</p>
        <Child onGrandchildMessage={handleMessageFromGrandChild}/>
    </div>
  )
}

export default Parrent