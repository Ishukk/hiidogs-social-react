// import { useEffect } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'

// function Protected(props) {
//     const {Component} = props
//     const nevigate = useNavigate()

//     useEffect(()=>{
//         let login = localStorage.getItem("Local_creadetital")
//         if(!login){
//             nevigate("/login")
//         }
//     },[Navigate])

//   return (
//     <div>

//     <Component/>
//     </div>
//   )
// }

// export default Protected




import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface ProtectedProps {
  Component: React.ComponentType;
}
function Protected({ Component }: ProtectedProps) {
  const navigate = useNavigate();
 useEffect(() => {
    const login = localStorage.getItem("Local_creadetital");
    if (!login) {
      navigate("/login");
    }
  },[navigate]);
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
