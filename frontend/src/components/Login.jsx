import React, {  useState } from 'react'
import Input from './Input'
import Button from './Btn'
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
// import { userLogin } from '../features/reducers/userSlice'
import axios from 'axios'
const Login = () => {
    const navigate =useNavigate()
    // const dispatch =useDispatch()
    // const user = useSelector(state=>state.user)
    // console.log(user)
    const [formData,setFormData] = useState({
        email : "",
        password : ""
    })
    const onChangeValue = (e)=>{
        setFormData({...formData,[e.target.name] : e.target.value})
    }
    const handleLogin = async (e)=>{
        e.preventDefault();
        const {email,password} = formData
        // dispatch(userLogin({email,password}))
        
        try {
            const response = await axios.post("http://localhost:3000/login",{
                email : email,
                password : password
            })
            if(response){
               setFormData({
                    email : "",
                    password : ""
                })
                localStorage.setItem("user",JSON.stringify(response.data))
               navigate("/home")
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
   <section className='relative mb-6'>
         <div className=''>
        <ul className='flex flex-col max-w-[30vw] items-center gap-6' >
            <Input placeholder="Email Address"
            value={formData.email}
            name="email"
            onChange={onChangeValue}
            />
            <Input placeholder="Password"
            value={formData.password}
            name="password"
            onChange={onChangeValue}
            />
            <Button text="Login" onClick={(e)=>handleLogin(e)}/>
        </ul>
        <div className='flex flex-col justify-center items-center mt-4 gap-4'>
        <p>Forget Password ?</p>
        
        </div>
        </div>
        
   </section>
  )
}

export default Login