import React, { useState } from "react"
import CalculatorFormMDy87 from "./Components/CalculatorForm/CalculatorFormMDy87"

function App() {

  const [equation, setEquation] = useState({});
  
  function updateEquation(e) {
    setEquation({
      ...equation,
      [e.target.id] : [e.target.value]
    })
  }

  function doOperation(e){
    switch(equation.operation){
      case "add":
        // do add
        console.log("Result = " + (parseFloat(equation.operand1) + parseFloat(equation.operand2)))
        break;
      default:
        console.log("no`")
      break;
    }
  }

  return (
    <div className="App">
      <h1>This is a calculator</h1>
      <CalculatorFormMDy87 update={updateEquation} action={doOperation}/>

    </div>
  );
}

export default App;
