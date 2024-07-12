import React from 'react'
import "../Styles/register.css"
import Footer from './Footer'

const Register = () => {
  return (
    <div>
      
      <div className='register-body'>
      <div className='register-form-box'>

        <h1>My account</h1>

        <form action="" className='register-form'>
            <p><label htmlFor="">Register</label></p>

            <p><label htmlFor="">FIRST NAME <span id='star'>*</span></label></p>
            <p><input type="text" name="text" id="" placeholder='First name' /></p>

            <p><label htmlFor="">LAST NAME <span id='star'>*</span></label></p>
            <p><input type="text" name="text" id="" placeholder='Last name' /></p>

            <p><label htmlFor="">PHONE <span id='star'>*</span></label></p>
            <p><input type="number" name="text" id="" placeholder='PHONE' maxlength="10"/></p>

            <p><label htmlFor="">EMAIL <span id='star'>*</span></label></p>
            <p><input type="email" name="text" id="" placeholder='EMAIL' /></p>

            <p><label htmlFor="">PASSWORD <span id='star'>*</span></label></p>
            <p><input type="Password" name="text" id="" placeholder='PASSWORD' /></p>
            <p id='button'><button disabled>CONTINUE</button></p>
            
            <p ><input type="checkbox" name="" id="checkbox1"  />
            <label for="checkbox1" > Add me to the PUMA mailing list </label></p>
            <p><input type="checkbox" name="" id="checkbox2" checked="checked"/>
           <label for="checkbox2"> I have read the terms and conditions, privacy policy and review guidelines and agree to them. </label> </p>
            
            

        </form>
      </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Register
