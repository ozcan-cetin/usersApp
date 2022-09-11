// https://reqres.in/
// buradaki backend API ile ReactJS kullanarak kullanıcı kaydı(register), kullanıcı girişi ve tüm kullanıcıları listeleme sayfalarını yapıp bana paylaşır mısınız?

import React, { createContext, useEffect, useState } from "react";
import axios from "axios"

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
}, [users]);


const url = `https://reqres.in/api/users?per_page=12`
  // const url = `https://reqres.in/api/users/`

const getUsers = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get(url);
      console.log(data);
      console.log(data.total)
      setUsers(data.data);
      setIsLoading(false);

    } catch (error) {
      console.log(error);
    //   toastErrorNotify(error.message)
      // toastErrorNotify(error.name)
      setIsLoading(false);
    }
  };

  useEffect(() => {
 getUsers()
  }, [])

//! POST (Create)
// const addUser = async (userInfo) => {
//   try {
//     let mydata = await axios.post(url, userInfo);
//     console.log(mydata);
//   } catch (error) {
//     console.log(error);
//   }
//   getUsers();
// };

// console.log(users)

//todo PAGINATION SECTION **************************
const [usersPerPage] =useState(6)
const [currentPage, setCurrentPage] = useState(1)


const indexOfLastUser=currentPage * usersPerPage
const indexOfFirstUser = indexOfLastUser - usersPerPage
const currentUsers = users.slice(indexOfFirstUser,indexOfLastUser)
const totalPages = Math.ceil(users.length/usersPerPage)
//todo *****************************************************
  
console.log(users.length);
  return (
    <AuthContext.Provider value={{ users, setUsers, currentUser, setCurrentUser, totalPages, setCurrentPage, currentUsers}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;