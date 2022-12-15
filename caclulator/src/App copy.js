import { useState } from 'react'
import './App.css';


function addition(a, b) {
  return a + b
}
function subtraction(a, b) {
  return a - b
}

const numbers = [0,1, 2, 3, 4, 5,6,7,8,9]
const operators = ['+', '-', '*', '/','=','C']


function App() {

  const [memory, setMemory] = useState(0)
  const [display, setDisplay] = useState('')
  return (

  <div className="App">
    <div className="display">{display || 0}</div>
    <div className="memory">{memory}</div>
    <div className="numbers">
      {numbers.map((number, index) =>
        <button key={index} onClick={() => {
          setDisplay(display + number)
        }}>{number}</button>
      )}
    </div>
    <div className="operators">
      {operators.map((operator, index) =>
        <button key={index} onClick={() => {
           if (operator === 'C') {
            setDisplay('')
            setMemory(0)
          }
          else if (operator === '+', '-', '*', '/') {
            //check if there is a number in memory
            if (memory) {
              //if there is a number in memory, check what type of operator it is and perform the operation
              if (operator === '+') {
                //this will keep the numbers to concatenating when i use addition
                setDisplay(parseInt(memory) + parseInt(display))
                setMemory(0)
              }
              else if (operator === '-') {
                setDisplay(memory - display)
                setMemory(0)
                
              }
              else if (operator === '*') {
                setDisplay(memory * display)
                setMemory(0)
              }
              else if (operator === '/') {
                setDisplay(memory / display)
                setMemory(0)
              }
              else if (operator === '=') {
                setDisplay(memory)
                setMemory(0)
              }
              else {
                setDisplay(memory)
                setMemory(0)
              }
            }
            else {
              //if there is no number in memory, store the number in memory
              setMemory(display)
              setDisplay('')
            }
          }
 

        }}>{operator}</button>
      )}
    </div>

  </div>
  )
}
    


export default App;
