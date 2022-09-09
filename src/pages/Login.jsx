import React, { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { toastSuccessNotify, toastWarnNotify } from '../helpers/ToastNotify'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const{users, setUsers}=useContext(AuthContext)


    const navigate = useNavigate()

    function emailValid(email){
      let pattern=/^[\w]+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       // return email.match(pattern) ? true:false
       return pattern.test(email)
    }
    

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!emailValid(email)){
        toastWarnNotify('Please type a valid email address')
      }else{
        const id = new Date().getTime();
        const newuser = { id: id, email: email, password:password };
        setUsers([...users, newuser]);
        setEmail("")
        setPassword("")
        navigate("/home", {state:email})
        toastSuccessNotify('Logged in successfully')
      }
       
    }
console.log(emailValid(email))
  return (
    <div className='row'>
        <form className="col-10 col-md-5 col-lg-4 mx-auto mt-5 loginForm" onSubmit={handleSubmit}>
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