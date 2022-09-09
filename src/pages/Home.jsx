import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import SingleUser from '../components/SingleUser'

const Home = () => {
const {users, page, setPage}=useContext(AuthContext)
 
  return (
    <div>{users?.map((user)=><SingleUser key={user.id} user={user}/>)}
    <div className='mt-2'>
      <button className='btn bg-primary' onClick={()=>setPage(page+1)}>next</button>
      <span className='m-2 fw-bold'>{page}</span>
      <button className='btn bg-primary' onClick={()=>setPage(page-1)}>previous</button>
    </div>
    </div>
  )
}

export default Home