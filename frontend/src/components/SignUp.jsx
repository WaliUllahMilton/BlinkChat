import { useState } from 'react'
import Input from './Input'
import Button from './Btn'
// import axios from "axios"
import { IoClose } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import  { userSignUp } from '../features/reducers/userSlice';

const SignUp = ({onClick}) => {
    // const [name,setName]=useState("")
    // const [email,setEmail]=useState("")
    // const [phone,setPhone]=useState("")
    // const [address,setAddress]=useState("")
    // const [password,setPassword]=useState("")
    const [formData,setFormData] = useState({
        name : "",
        email : "",
        phone : "",
        address : "",
        password : ""
    })
    console.log(formData)
    const handleInputChange = (e)=>{
        setFormData({...formData,[e.target.name] : e.target.value})
    }
    const dispatch = useDispatch()
    const handleSignup = ()=>{
        // const {name,email,phone,address,password} = formData;
        const { name, email, phone, address, password } = formData;
        dispatch(userSignUp({ name, email, phone, address, password }));
    }

  return (
    <section className='absolute top-10 right-[50%] translate-x-[50%] z-50 px-20 transition-all ease-in-out duration-300'>
            <div className='bg-slate-800 px-8 py-12 relative'>
                <span className='absolute right-2 top-2 text-white text-2xl' onClick={onClick}><IoClose /></span>
                <ul className='flex flex-col gap-6 items-center'>
                    <Input placeholder="name" name="name" value={formData.name} onChange={handleInputChange} />
                    <Input placeholder="email" name="email" value={formData.email} onChange={handleInputChange} />
                    <Input placeholder="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                    <Input placeholder="address" name="address" value={formData.address} onChange={handleInputChange} />
                    <Input placeholder="password" name="password" value={formData.password} onChange={handleInputChange} />
                    <Button className="max-w-[200px]" text="sign up" onClick={handleSignup} />
                </ul>
            </div>
        </section>
  )
}

export default SignUp