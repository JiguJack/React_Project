import React, { useState } from 'react'
import '../src/Header.css'

function Header() {
  const [input, setInput] = useState("")

  const num = (data, e) => {
    setInput(input + e.target.value)
  }

  const calculate = (e) => {
    setInput(eval(input));
  }
  
  const clear = (e) => {
    setInput("");
  }

  return (
    <div className='container'>
      <div className="calculator">
          <input type="text" value={input} disabled/>

          <button value="1" onClick={(e) => num("one", e)}>1</button>
          <button value="2" onClick={(e) => num("two", e)}>2</button>
          <button value="3" onClick={(e) => num("three", e)}>3</button>
          <button value="+" onClick={(e) => num("add", e)}>+</button>

          <button value="4" onClick={(e) => num("four", e)}>4</button>
          <button value="5" onClick={(e) => num("five", e)}>5</button>
          <button value="6" onClick={(e) => num("six", e)}>6</button>
          <button value="-" onClick={(e) => num("minus", e)}>-</button>

          <button value="7" onClick={(e) => num("seven", e)}>7</button>
          <button value="8" onClick={(e) => num("eight", e)}>8</button>
          <button value="9" onClick={(e) => num("nine", e)}>9</button>
          <button value="*" onClick={(e) => num("multiply", e)}>*</button>

          <button value="0" onClick={(e) => num("zero", e)}>0</button>
          <button value="00" onClick={(e) => num("zeroes", e)}>00</button>
          <button onClick={(e) => clear(e)}>c</button>
          <button className='result' onClick={ (e) => calculate(e)}>=</button>
      </div>
    </div>
  )
}

export default Header