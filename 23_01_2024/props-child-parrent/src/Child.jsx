import React from 'react'
import Grandchild from './GrandChild'

function Child({onGrandchildMessage}) {
  return (
    <div>
        <h2>Child</h2><br />
        <Grandchild onGrandchildMessage={onGrandchildMessage}/>
    </div>
  )
}

export default Child