import React,{useState} from 'react'

function Grandchild({onGrandchildMessage}) {
    const [message,setMessage]=useState('');
    const handleSendMessage=()=>{
        onGrandchildMessage(message);
    }
  return (
    <div>
        <h3>GrandChild</h3><br />
        <input type="text" placeholder='Type a Message' value={message} onChange={(e)=>setMessage(e.target.value)} /> <br />
        <button onClick={handleSendMessage}>Send Message to Child</button>
    </div>
  )
}

export default Grandchild