import React,{ useState } from 'react';
import './App.css';

function App() {
  const [input,setInput]=useState("");
  const [result,setResult]=useState("0");
  const changingInput=(e)=>{
    setInput(e.target.value);
  }
  const onResult=()=>{
    setResult(eval(input))
  }
  return (
      <div className='container'>
      <input type="text" value={input} name="input" onChange={changingInput}/><br/>
      <button className='resultbutton' onClick={onResult}>Result</button>
      <h1 className='result'>Result is:{result}</h1>
      <div>
      <div>
      <button className='numbutton' onClick={()=>setInput(input+"1")}>1</button>
      <button className='numbutton' onClick={()=>setInput(input+"2")}>2</button>
      <button className='numbutton' onClick={()=>setInput(input+"3")}>3</button>
      <button className='numbutton' onClick={()=>setInput(input+"4")}>4</button>
      <button className='numbutton' onClick={()=>setInput(input+"5")}>5</button>
      </div>
      <div>
      <button className='numbutton' onClick={()=>setInput(input+"6")}>6</button>
      <button className='numbutton' onClick={()=>setInput(input+"7")}>7</button>
      <button className='numbutton' onClick={()=>setInput(input+"8")}>8</button>
      <button className='numbutton' onClick={()=>setInput(input+"9")}>9</button>
      <button className='numbutton' onClick={()=>setInput(input+"0")}>0</button>
      </div>
      <div>
      <button className='numbutton' onClick={()=>setInput(input+"+")}>+</button>
      <button className='numbutton' onClick={()=>setInput(input+"*")}>*</button>
      <button className='numbutton' onClick={()=>setInput(input+"-")}>-</button>
      <button className='numbutton' onClick={()=>setInput(input+"/")}>/</button>
      <button className='numbutton' onClick={()=>setInput("")}>CLR</button>
      </div>
      </div>
    </div>
  );
}

export default App;