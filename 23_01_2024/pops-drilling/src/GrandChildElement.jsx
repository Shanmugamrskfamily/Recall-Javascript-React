import React from 'react'

function GrandChildElement(props) {

  return (
    <div><h3>Grand Child Element</h3>
        <p>Names From Parrent: {props.names.join(', ')}</p>
    </div>
  )
}

export default GrandChildElement