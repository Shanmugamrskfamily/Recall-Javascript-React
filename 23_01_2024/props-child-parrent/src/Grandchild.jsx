import React, { useState } from 'react'

function GrandChild({onGrandchildMessage}) {
    const [message,setMessage]=useState('');
    const handleSendMsg=()=>{
        onGrandchildMessage(message);
    }

  return (
    <div>
        <h3>GrandChild</h3>
        <input type="text" placeholder='Type Your Message' value={message} onChange={(e)=>setMessage(e.target.value)} />
        <button onClick={handleSendMsg}>Sent Message</button>
    </div>
  )
}

export default GrandChild