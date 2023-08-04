import React, { useState } from 'react'
import "./AuthStyle.css"
import { AiOutlineMail } from 'react-icons/ai'
import { FaUserAlt } from "react-icons/fa"
import { RiLockPasswordFill } from "react-icons/ri"
import { BiSolidHide, BiSolidShow } from "react-icons/bi"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const SignUp = () => {
    // const dispatch = useDispatch()
    const [name, setName] = useState("")
    // console.log(name)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState({ value: "", msg: "" })
    const [viewPassword, setViewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmedPassword] = useState(false)

    const data = { name, email, password }
    console.log(data)
    const Nav = useNavigate()


    // const url = "https://eflexshop.onrender.com/user/register"
    // axios.post(data, url)
    // .then ((res)=>{
    //     console.log(res)
    //     dispatch
    // })


    // To save SignUp detail on Local storage
    // const Set= ()=>{
    //     localStorage.setItem("details", JSON.stringify(data))
    // }






    const url = "https://eflexshop.onrender.com/user/register"
    // axios.post(data, url)
    //     .then((res) => console.log(res))


    const SignUpButton = (e) => {
        e.preventDefault()
        if (!name) {
            setMessage({error:true, value: "name", msg: "*Input your name" })
        } else if (!email) {
            setMessage({error:true, value: "email", msg: "*Input your email" })
        } else if (!password) {
            setMessage({error:true, value: "password", msg: "*Input your Password" })
        } else if (!confirmPassword) {
            setMessage({error:true, value: "confirmPassword", msg: "*Password does not match" })
        }
        else {
            setMessage("")
        }
    }


    return (
        <div className='signUpBody'>
            <div className="signUp">
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "70%", background: "yellow", width: "100%" }}>
                    <h1>Welcome! Please Sign Up </h1>
                    <div className='signUpInput'>
                        <input type="text" placeholder='Input your name' className='Input' value={name} onChange={(e) => setName(e.target.value)} />
                        <FaUserAlt className='leftIcon' />
                        {
                            message.value === "name" ?
                                <p style={{style:"red"}}>{message.msg}</p> : null
                        }
                    </div>
                    <div className='signUpInput'>
                        <input type="email" placeholder='Email' className='Input' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <AiOutlineMail className='leftIcon' />
                        {
                            message.value === "email" ?
                                <p>{message.msg}</p> : null
                        }
                    </div>
                    <div className='signUpInput'>
                        <input type={ viewPassword? "text":"password"} placeholder='Password' className='Input' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <RiLockPasswordFill className='leftIcon' />
                        <BiSolidShow className='rightIcon' onClick={()=>{
                            setViewPassword(true)
                        }}/>
                        {
                        viewPassword ? <BiSolidHide className='rightIcon' onClick={()=>{
                            setViewPassword(false)
                        }}/> : null
                        }
                        {
                            message.value === "password" ?
                                <p>{message.msg}</p> : null
                        }
                    </div>
                    <div className='signUpInput'>
                        <input type={showConfirmPassword? "text" : "password"} placeholder='Confirm Password' className='Input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <RiLockPasswordFill className='leftIcon' />
                        <BiSolidShow className='rightIcon' onClick={()=>{
                            setShowConfirmedPassword(true)
                        }}/>
                        {showConfirmPassword? <BiSolidHide className='rightIcon' onClick={()=>{
                            setShowConfirmedPassword(false)
                        }} /> : null}
                        {
                            message.value === "confirmPassword" ?
                                <p>{message.msg}</p> : null
                        }
                    </div>
                    <p>Already have an account? <span style={{ cursor: "pointer", color: "blue" }} onClick={() => {
                        Nav("/login")
                    }}>Sign in</span></p>
                </div>
                <button className='signUpBtn' onClick={(e) => SignUpButton(e)}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp