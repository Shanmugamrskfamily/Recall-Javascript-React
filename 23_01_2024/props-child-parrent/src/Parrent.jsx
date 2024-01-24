import React,{useState} from 'react'
import Child from './Child'
function Parrent() {
    const [grandchildMessage, setgrandchildMessage]=useState('');
    const handleGrandChildMessage=(message)=>{
        setgrandchildMessage(message);
    }
  return (
    <div>
        <h1>Parrent</h1>
        <p>Message From Grand Child: {grandchildMessage}</p>
        <Child onGrandchildMessage={handleGrandChildMessage}/>
    </div>
  )
}

export default Parrent