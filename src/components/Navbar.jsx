import React, { useContext} from 'react'
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { toastSuccessNotify } from '../helpers/ToastNotify'

const Navbar = ({email}) => {
const navigate = useNavigate()

const{users, currentUser, setCurrentUser}=useContext(AuthContext)

const handleLogout=()=>{
setCurrentUser("")
navigate("/")
toastSuccessNotify('Logged out successfully')
  }
console.log(currentUser)
  return (
    <nav className="navbar bg-dark d-md-flex justify-content-end pe-2">
    {currentUser ? (
      <div className='container-fluid gap-3'>
      <h4 className='text-white m-0 text-capitalize'>{users.filter((user)=>user.email===currentUser)[0].first_name} {users.filter((user)=>user.email===currentUser)[0].last_name}</h4>
      <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <>
        <button className="btn btn-primary m-1" onClick={()=>navigate("/")}>Login</button>
        <button className="btn btn-primary" onClick={()=>navigate("/register")}>Register</button>
      </>
    )}
  </nav>
  )
}

export default Navbar