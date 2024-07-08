
// import SignUp from "../components/SignUp"

import Login from "../components/Login"


const Home = () => {
  return (
    <section className="max-w-container py-32  flex justify-between items-center mx-auto">
      <div>
      <h1 className="text-[7vw]  font-bold text-rose-500">Blink<span className="text-blue-500">Chat</span></h1>
      <p className="text-base font-normal ml-1">We promise to keep your data Encrypted</p>
      </div>
      <Login/>
    </section>
  )
}

export default Home