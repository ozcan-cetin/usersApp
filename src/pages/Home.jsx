import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import SingleUser from '../components/SingleUser'
import Paginate from '../components/Paginate'

const Home = () => {
const {users, currentUsers}=useContext(AuthContext)
 
  return (
    <div className='container'>
     <div className='d-flex flex-wrap justify-content-around'>{currentUsers?.map((user)=><SingleUser key={user.id} user={user}/>)}</div> 
    {/* <div className='mt-2'>
      <button className='btn bg-primary' onClick={()=>setPage(page+1)}>next</button>
      <span className='m-2 fw-bold'>{page}</span>
      <button className='btn bg-primary' onClick={()=>setPage(page-1)}>previous</button>
    </div> */}
    <div>
      <Paginate/>
    </div>
    </div>
  )
}

export default Home