import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import SingleUser from '../components/SingleUser'
import Paginate from '../components/Paginate'

const Home = () => {
const {users, currentUsers}=useContext(AuthContext)
 
  return (
    <div className='container'>
     <div className='d-flex flex-wrap justify-content-around'>{currentUsers?.map((user)=><SingleUser key={user.id} user={user}/>)}</div> 
    <div>
      <Paginate/>
    </div>
    </div>
  )
}

export default Home