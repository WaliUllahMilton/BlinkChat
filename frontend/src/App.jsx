import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserHome from "./pages/UserHome"

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/home" element={<UserHome/>}/>
    </Routes>
  )
}

export default App