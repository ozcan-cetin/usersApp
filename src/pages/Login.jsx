import React, { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
// import { toastSuccessNotify, toastWarnNotify } from '../helpers/ToastNotify'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const{users, setUsers, currentUser, setCurrentUser}=useContext(AuthContext)


    const navigate = useNavigate()

    const handleLogin = (e) => {
      e.preventDefault()
      let emailControl = users?.filter((item)=>item.email===email)

      if(emailControl.length>0){
        setCurrentUser(email)
        navigate("/home")
        // setCurrentUser("")
        // toastSuccessNotify('Logged in successfully')

   
      }else{
        alert("e-mail address not found")
       // toastWarnNotify('Please type a valid email address')
      }
    }
  return (
    <div className='row'>
        <form className="col-10 col-md-5 col-lg-4 mx-auto mt-5 loginForm" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email"  id="email" value={email} autoFocus required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" id="password" value={password} minLength={7} required onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type="submit" className='btn btn-primary form-control'>Login</button>
        </form>
    </div>
  )
}

export default Login