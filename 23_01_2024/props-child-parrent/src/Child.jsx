import React from 'react'
import GrandChild from './GrandChild'

function Child({onGrandchildMessage}) {

  return (
    <div>
        <h2>Child</h2>
        <GrandChild onGrandchildMessage={onGrandchildMessage}/>
    </div>
    
  )
}

export default Child