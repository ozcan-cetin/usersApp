import React, { useContext, useState } from 'react'
// import {useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
// import { toastSuccessNotify, toastWarnNotify } from '../helpers/ToastNotify'

const Register = () => {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [avatar, setAvatar] = useState("")
    
    const{addUser}=useContext(AuthContext)

  
    const handleSubmit = (e) => {
      e.preventDefault();
      addUser({ email: email, firstName: firstName,  lastName:lastName});
      setEmail('');
      setFirstName('');
      setLastName('');
      // setAvatar('');
    };

  return (
    <div className='row'>
        <form className="col-10 col-md-5 col-lg-4 mx-auto mt-5 loginForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="first" className="form-label">First Name</label>
                  <input type="text" className="form-control" name="text"  id="first" value={firstName} autoFocus required onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="last" className="form-label">Last Name</label>
                  <input type="text" className="form-control" name="text"  id="last" value={lastName} autoFocus required onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email"  id="email" value={email} autoFocus required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" id="password" value={password} minLength={7} required onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div>
                <label htmlFor="avatar" className="form-label">Avatar</label>
                <input type="file" name="" id="" />
                </div>
                <button type="submit" className='btn btn-primary form-control'>Register</button>
        </form>
    </div>
  )
}

export default Register