import React from "react";

const SingleUser = ({ user }) => {
  const { avatar, email, first_name, last_name, id } = user;
  return (
    <div className="my-1 text-center singleUser">
      {" "}
      <div className="imgDiv mx-auto">
        <img src={avatar} alt={first_name} />
      </div>
      <h5>{first_name} {last_name}</h5>
      <p>{email}</p>
    </div>
  );
};

export default SingleUser;
