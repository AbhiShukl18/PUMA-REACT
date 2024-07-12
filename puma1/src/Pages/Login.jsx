import React from 'react'
import "../Styles/login.css"
import Footer from './Footer'

const Login = () => {
  return (
    <div>
      <div className='login-body'>
      <div className='login-form-box'>

        <h1>My account</h1>

        <form action="" className='login-form'>
            <p><label htmlFor="">Login / Register</label></p>
            <p><label htmlFor="">PHONE <span id='star'>*</span></label></p>
            <p><input type="number" name="text" id="" placeholder='PHONE' maxlength="10"/></p>
            <p id='button'><button disabled>GET OTP</button></p>
            <p>An OTP will be sent to your mobile number for verification</p>
            <p>
               <span id='links1'> LOGIN WITH EMAIL AND PASSWORD </span>
            <span id='links2'>    LOGIN WITH PHONE AND PASSWORD</span>
            
            </p>

        </form>
      </div>

      </div>

      <Footer/>
    </div>
  )
}

export default Login
