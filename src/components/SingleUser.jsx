import React from 'react'

const SingleUser = ({user}) => {
    const {avatar, email, first_name,  last_name, id} = user
  return (
    <div>
        <h3>{first_name}</h3>
        <h3>{email}</h3>
        <div>
            <img src={avatar} alt={first_name} />
        </div>

    </div>
  )
}

export default SingleUser