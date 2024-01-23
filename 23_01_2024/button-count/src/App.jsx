import React from "react"
import Button_RFCE from "./Button_RFCE"
import Button_RFCE_UseRef from "./Button_RFCE_UseRef"
import Button_ClassComponent from "./Button_ClassComponent"

function App() {


  return (
<div>
  <h1>React Button Functionality</h1>
  <h3>Using UseState() Method</h3><br/>
<Button_RFCE/><br/>
<h3>Using UseRef() Method</h3>
<Button_RFCE_UseRef/><br/>
<h3>Using React Class Component</h3>
<Button_ClassComponent/>
</div>
  )
}

export default App
