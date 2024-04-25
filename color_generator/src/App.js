import { useState } from "react";

function App() {

  const [colors, setColors] = useState([]);

  let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

  const newColor = () => {
    let color = "#";
    for (let index = 0; index < 6; index++) {
      let element = Math.floor(Math.random() * arr.length);
      color = color + arr[element];
    }
    return color;
  }

  const generateColor = () => {
    let temp = [];
    for (let i = 0; i < 15; i++){
      let c = newColor();
      temp.push(c);
    }
    setColors(temp);
  }
  return (
    <div>
      <h1>Color Generator</h1>
      {colors.map((item) => <div style={{width:"100px",height:"100px",border:"solid 2px black", backgroundColor:item,display:"inline-block",textAlign:"center"}}>{item}</div>)}
      <button style={{display:"block", padding:"10px"}} onClick={generateColor}>Generate</button>
    </div>
  );
}

export default App;
