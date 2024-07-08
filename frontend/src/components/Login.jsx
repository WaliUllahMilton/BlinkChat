import React, { useState } from 'react'
import Input from './Input'
import Button from './Btn'
import SignUp from './SignUp'
import axios from 'axios'
const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [toggleSignupBtn,setToggleSignupBtn] = useState(false)
    console.log(toggleSignupBtn)
    const handleLogin = async ()=>{
        try {
            const data = await axios.post("http://localhost:3000/login",{
                email : email,
                password : password
            })
            if(data){
               setEmail("")
               setPassword("")
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
   <section className='relative'>
         <div className='bg-slate-500 px-4 py-8 rounded-md shadow-lg shadow-cyan-200'>
        <ul className='flex flex-col max-w-[30vw] items-center gap-6' >
            <Input placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <Input placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Button text="Login" onClick={handleLogin}/>
        </ul>
        <div className='flex flex-col justify-center items-center mt-4 gap-4'>
        <p>Forget Password ?</p>
        <Button text="Create a new Account"
        onClick={()=>setToggleSignupBtn(!toggleSignupBtn)}
        />
        </div>
        </div>
        {
            toggleSignupBtn ? <SignUp/> : ""
        }
   </section>
  )
}

export default Login