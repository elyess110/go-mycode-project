import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login, register } from '../../redux/action/actionlog'
import './style.css'


export default function Login() {
  const dispatch=useDispatch()
    const navigate=useNavigate()
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [profilepic,setProfilepic] = useState('')


    const handleLogin=()=>{
      dispatch(login({email,password},navigate))
      
    }
    const handleregister=()=>{
      dispatch(register({email,password,firstName,lastName,profilepic},navigate))

    }
    
  return (
    <div className='lyess'>
 <div className="login-wrap">
  <div className="login-html">
    <input
      id="tab-1"
      type="radio"
      name="tab"
      className="sign-in"
      defaultChecked=""
    />
    <label htmlFor="tab-1" className="tab">
      Login
    </label>
    <input id="tab-2" type="radio" name="tab" className="sign-up" />
    <label htmlFor="tab-2" className="tab">
      Sign up
    </label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
          <label htmlFor="user" className="label" >
            Email 
          </label>
         <input type="text" className="input" onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label" >
            Password
          </label>
          <input
            type="password"
            className="input"
          
            onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div className="group">
          <input
            id="check"
            type="checkbox"
            className="check"
            defaultChecked=""
          />
        </div>
        <div className="login-button">
          <button type="button" className="login" onClick={handleLogin}>
            {" "}
            Login{" "}
          </button>
        </div>
        <div className="hr" />
      </div>
      <div className="sign-up-htm">
      <div className="group">
          <label  className="label" >
          </label>
          <input  type="text" className="inviseb"onChange={(e)=> setProfilepic(e.target.value)} />
        </div>
      <div className="group">
          <label  className="label" >
          First Name
          </label>
          <input  type="text" className="input"onChange={(e)=> setFirstName(e.target.value)} />
        </div>
      <div className="group">
          <label className="label" >
          Last Name
          </label>
          <input type="text" className="input"onChange={(e)=> setLastName(e.target.value)} />
        </div>
        <div className="group">
          <label  className="label" >
            Email
          </label>
          <input  type="text" className="input" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">
            Password
          </label>
          <input
            type="password"
            className="input"
            onChange={(e)=> setPassword(e.target.value)}/>
        </div>
       
        <div className="signup-button">
          <button type="button" className="signup" onClick={handleregister}>
            {" "}
            Sign Up{" "}
          </button>
        </div>
      </div>
    </div>
  </div>

</div>
{/* <div><h1 className='logotop'>CRAZY cinema</h1></div>
<br/><br/> */}
<img className='imgcinema' src='https://wallpaper.dog/large/20552171.jpg' alt=''></img>
    </div>
  )
}