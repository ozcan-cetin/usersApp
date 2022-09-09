// https://reqres.in/
// buradaki backend API ile ReactJS kullanarak kullanıcı kaydı(register), kullanıcı girişi ve tüm kullanıcıları listeleme sayfalarını yapıp bana paylaşır mısınız?

import React, { createContext, useEffect, useState } from "react";
import axios from "axios"

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1)

  const url = `https://reqres.in/api/users?page=${page}`
  // const url = `https://reqres.in/api/users/`

const getUsers = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get(url);
      console.log(data);
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
  }, [page])

//! POST (Create)
const addUser = async (userInfo) => {
  try {
    let mydata = await axios.post(url, userInfo);
    console.log(mydata);
  } catch (error) {
    console.log(error);
  }
  getUsers();
};

console.log(users)
  

  return (
    <AuthContext.Provider value={{ users, addUser, page, setPage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;