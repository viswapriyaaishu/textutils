import Form from './mycomponents/Form.js'
import './App.css';
import Navbar from "./mycomponents/Navbar.js"
import React,{useState} from 'react'
import Alert from './mycomponents/Alert.js'
import About from './mycomponents/About.js'

import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
export default function App() {

  const[mode,setMode]=useState('dark')
  const[alert,setAlert]=useState(null)
  const showAlert=(type,message)=>
    {
      setAlert(
        {
          type:type,
          message:message
        }
      )
      setTimeout(()=>
      {
        setAlert(null)
      },1000)
    }
 const togglemode=()=>
  {
    if(mode==='light')
      {
        setMode('dark')
        document.body.style.backgroundColor='grey';
        document.title='Text utils-Dark mode';
        showAlert('success','Dark mode enabled')
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
        document.title='Text utils-Light mode'
        showAlert('success','Light mode enabled')
      }
  }
  return (
    <>
    <Router>
    <div className="logo">
      
    <Navbar title="Textutils ka" abot="About us" mode={mode} togglemode={togglemode}/></div>
    <Alert alert={alert}/>
    
    <div className="container" my-5>
    <Routes>
        <Route path="/home" element={<Form mode={mode} showAlert={showAlert} />}></Route>
    <Route path='/about' element={<About/>}> </Route>
    
    </Routes>
    </div>
    </Router>
    
  </>);
}

// export default App;
