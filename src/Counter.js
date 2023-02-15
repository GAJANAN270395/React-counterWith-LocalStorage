import React,{useState,useEffect} from "react";
import "./style.css";

const Counter =()=>{
const initialValue = () => Number(window.localStorage.getItem('template'));
const [value , setValue] = useState(initialValue);

useEffect (()=>{
  window.localStorage.setItem('template', value);
},[value])

const increaseFn =()=>{
   setValue(value+1);
} 
const decreaseFn =()=>{
  if(value>0){
    setValue(value-1);
  }
}
const resetFn =()=>{
   setValue(0);
}


 return(
   <div className="container">
     <h2>Number: {value}</h2>
     <button onClick={increaseFn}>Increase</button>
     <button onClick={decreaseFn}>Decrease</button>
     <button onClick={resetFn}>Reset</button>
   </div>
 )
}
export default Counter;