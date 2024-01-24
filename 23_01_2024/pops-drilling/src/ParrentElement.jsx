import React from 'react'
import ChildElement from './ChildElement'

function ParrentElement() {
    const names=['SHANMUGAM','KISHORE','RAJARAM']
  return (
    <div><h1>Parrent Element</h1>
        <b>List Of Names</b>
        <ChildElement names={names}/>
    </div>
  )
}

export default ParrentElement