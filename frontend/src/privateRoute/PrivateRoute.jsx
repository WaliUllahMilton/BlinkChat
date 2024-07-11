import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ()=>{
const [auth,setAuth] = useState({})
const authCheck = ()=>{
    const user = localStorage.getItem("user");
    if (user) {
        setAuth(JSON.parse(user));
    } else {
        setAuth(null);
    }
}
// console.log(auth)
useEffect(()=>{
    authCheck()
},[])
console.log(auth);
// useEffect(()=>{
//     if(auth.token === null){
//         navigate("/")
//     }
// },[auth])
if(auth === null){
    return <Navigate to="/" replace = {true}/>
}


return (
    <>
        {
            auth?.token ? <Outlet/> : null
        }
    </>
    
)};

export default PrivateRoute;