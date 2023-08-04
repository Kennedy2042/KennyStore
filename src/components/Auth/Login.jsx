import React, { useState } from 'react'
import "./AuthStyle.css"
import { FaUserAlt } from 'react-icons/fa'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'



const Login = () => {
  const [seePassword, setSeePassword] = useState(false)

  return (
    <div className='login'>
      <h1>Welcome Back!</h1>
      <h3>Get ready for a shopping delight</h3>
      <div className="loginForm">
        <input className="loginFormInput" type="email" placeholder='Enter your Email' />
        <FaUserAlt className='loginLeftIcon' />
        <input className="loginFormInput" type={
          seePassword ? "text" : "password"
        } placeholder='Enter your password' />
        {/* <BiSolidHide className='loginRightIcon' /> */}
        <BiSolidShow className='loginRightIcon' onClick={() => { setSeePassword(true) }} />
        {
          seePassword ? <BiSolidHide className='loginRightIcon' onClick={
            () => { setSeePassword(false) }
          } /> : null
        }
      </div>
      <button className='loginBtn'>Login</button>
    </div>

  )
}

export default Login