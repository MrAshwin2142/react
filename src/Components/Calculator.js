import React from 'react'
import { Form } from 'react-bootstrap';
import { useState } from 'react'

function Calculator() {
    const [numbers, setNumbers] = useState({
        num1: "",
        num2: "",
      });

      const handleSubmit = (event) => {
        
        alert("the sum is ", numbers.num1+numbers.num2)
      };
  return (
    <div >
      <form className="mb-3">
        <div>
          <h3>Calculator</h3>
        </div>
        <div>
          <input type="number" 
          name="firstNumber" 
          placeholder="Enter first Number" 
          value={numbers.num1}
          onChange={(event) => {
            setNumbers({ ...numbers, num1: event.target.value });
        }}
        />
        </div>
        <div>
          <input type="number" 
          name="secondNumber" 
          placeholder="Enter second Number" 
          value={numbers.num2}
          onChange={(event) => {
            setNumbers({ ...numbers, num2: event.target.value });
        }}
          />
        </div>
        <div>
          <button onClick={() => { 
            let sum = Number(numbers.num1)+Number(numbers.num2);
            let msg =`The Addition is ${sum}`; 
            alert(msg);
           }}>Sum</button>

           <button onClick={() => { 
            let sum = Number(numbers.num1)-Number(numbers.num2);
            let msg =`The substraction is ${sum}`; 
            alert(msg);
           }}>subtract</button>

           <button onClick={() => { 
            let sum = Number(numbers.num1)/Number(numbers.num2);
            let msg =`The Division is ${sum}`; 
            alert(msg);
           }}>divid</button>
           
           <button onClick={() => { 
            let sum = Number(numbers.num1)*Number(numbers.num2);
            let msg =`The Multiplication is ${sum}`; 
            alert(msg);
           }}>Multiply</button>
        </div>
      </form>
    </div>
  )
}

export default Calculator