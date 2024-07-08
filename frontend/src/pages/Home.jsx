
// import SignUp from "../components/SignUp"

import { useState } from "react"
import Button from "../components/Btn"
import Login from "../components/Login"
import SignUp from "../components/SignUp"


const Home = () => {
  const [toggleSignupBtn,setToggleSignupBtn] = useState(false)
  console.log(toggleSignupBtn)
  return (
    <section className="max-w-container py-32  flex justify-between items-center mx-auto">
      {
        toggleSignupBtn && <div className="w-container transition-all ease-in-out duration-300 h-full bg-white absolute top-0 z-20 opacity-50"></div>
      }
      <div>
      <h1 className="text-[7vw]  font-bold text-rose-500">Blink<span className="text-blue-500">Chat</span></h1>
      <p className="text-base font-normal ml-1">We promise to keep your data Encrypted</p>
      </div>
      <div>
      <Login/>
      <Button text="Create a new Account"
        onClick={()=>setToggleSignupBtn(!toggleSignupBtn)}
        />
      {
        toggleSignupBtn ? <SignUp onClick={()=>setToggleSignupBtn(!toggleSignupBtn)}/> : ""
      }
      </div>
      
    </section>
  )
}

export default Home