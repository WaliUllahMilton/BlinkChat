import React, { useRef, useState } from 'react'
import Input from './Input'
import Button from './Btn'
import axios from "axios"
import { IoClose } from "react-icons/io5";

const SignUp = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [password,setPassword]=useState("")
    const handleSignup = async()=>{
        try {
            const data = await axios.post("http://localhost:3000/registration",{
                name : name,
                email : email,
                phone : phone,
                address : address,
                password : password
            })
            if(data){
                setName("");
                setEmail("");
                setPhone("");
                setAddress("");
                setPassword("");
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <section className='absolute -top-7 right-[50%] px-20 bg-yellow-200'>
        <div className='bg-slate-300 px-8 py-12 relative'>
            <span className='absolute right-2 top-2 text-2xl'><IoClose/></span>
        <ul className='flex flex-col gap-6 items-center'>
            <Input placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <Input placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <Input placeholder="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            />
            <Input placeholder="address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            />
            <Input placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Button className="max-w-[200px]" text="sign up"
            onClick={handleSignup}
            />
        </ul>
        </div>
    </section>
  )
}

export default SignUp