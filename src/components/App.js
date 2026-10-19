
import React from "react";
import './../styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import{edited} from "./Useinfoslice"

const App = () => {

  const input=useSelector((state)=>state.response.value)
  return (
    <div>
    <label>
        <input value={} onChange={dispatch(edited())}/>
    Enter Your name
    </label>
    <label>
        <input value={} onChange={dispatch(edited())}/>
    Enter Your email</label>
    </div>
    <div>
    <h4>Corrected Names</h4>
  <span>Name:{input}</span>
 <span>Email:{input}</span>
  )
}

export default App
