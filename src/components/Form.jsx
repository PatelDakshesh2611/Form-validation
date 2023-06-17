import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    props.data(0)
    const nav=useNavigate()
    const[email,upde]=useState('')
  const[pass,upp]=useState('')
    const forget=()=>{
        const data=prompt("Please enter your email-id through which you have logged in before")
        if(data===localStorage.getItem('email')){
            swal(`Your password is ${localStorage.getItem('password')}`)
        }
        else if(!data){

        }
        else{
            swal("Your email-id is not registered on our server")
        }
    }
   
    const form=(e)=>{
        e.preventDefault()
        if(!email || !pass){
            swal("Please fill all the details");
        }
        else if(email.slice(-10,)!=='@gmail.com'){
            swal("Please enter valid email-id");
           }
        else if(!localStorage.getItem('email') || !localStorage.getItem('password')){
            swal("Hello, you're new to us. Please signup first");
       }
       else{
           if(pass===localStorage.getItem('password') && email===localStorage.getItem('email')){
            nav('/maincourse')

           }
           else{
            swal("password or email-id is incorrect")
           }
       }
    }
  return (
    <div>
        
      <div className="wrapper fadeInDown">
  <div id="formContent">
    {/* Tabs Titles */}
    <h2 className="active"> Sign In </h2>
    <Link to='/signup'><h2 className="inactive underlineHover">Sign Up </h2></Link>
    {/* Icon */}
    <div className="fadeIn first">
    <i class="fa fa-bolt" aria-hidden="true"></i>
    </div>
    {/* Login Form */}
    <form>
      <input onChange={(e)=>{upde(e.target.value)}}
        type="text"
        id="login"
        className="fadeIn second"
        name="login"
        placeholder="login"
      />
      <input onChange={(e)=>{upp(e.target.value)}}
        type="text"
        id="password"
        className="fadeIn third"
        name="login"
        placeholder="password"
      />
      <input onClick={(e)=>{form(e)}} type="submit" className="fadeIn fourth" defaultValue="Log In" />
    </form>
    {/* Remind Passowrd */}
    <div id="formFooter">
      <a onClick={()=>{forget()}} className="underlineHover" href="#">
        Forgot Password?
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Form
