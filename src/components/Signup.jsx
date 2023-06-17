import React from 'react'
import { useState } from 'react'
import swal from 'sweetalert';
const Signup = () => {
  const[email,upde]=useState('')
  const[pass,upp]=useState('')
  const[reppass,uppp]=useState('')
  const[name,upn]=useState('')

  const signup=()=>{
   if(!email || !pass || !reppass ||!name){
    swal("please fill all details")
   }
   else{
    if(localStorage.getItem('email')===email){
       swal("you're already registered on our server")
    }
    else if(email.slice(-10,)!=='@gmail.com'){
    swal("please enter valid email id")
   }
   else if(pass!==reppass){
    swal("Both password and repeat password should be same")
   }
   else{
    swal("Yeah!", "You have been successfully registered!", "success");
    localStorage.setItem("email",email)
    localStorage.setItem('password',pass)
   }
  }}
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={(e)=>{upn(e.target.value)}}
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={(e)=>upde(e.target.value)}
                        type="email"
                        id="form3Example3c"
                        className="form-control" 
                        required
                      />
                      <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={(e)=>upp(e.target.value)}
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={(e)=>uppp(e.target.value)}
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in{" "}
                      
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={()=>{signup()}} type="button" className="btn btn-primary btn-lg">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Signup
