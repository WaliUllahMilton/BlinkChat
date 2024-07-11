import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserHome from "./pages/UserHome"
// import { useEffect, useState } from "react"
import PrivateRoute from "./privateRoute/PrivateRoute"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route element={<PrivateRoute/>}>
        <Route  path="/home" element={<UserHome/>}/>
      </Route>
    </Routes>
  )
}

export default App