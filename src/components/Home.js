import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Users from "./Users";

const Home = () => {
  const [users, setUsers] = useState([]);
const [loading,setLoading] = useState(true);
  const getUsers = async () => {
    try {
        setLoading(false);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      setUsers(await response.json());
    } catch (error) {
        setLoading(false);
      console.log("my error is "+error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if(loading){
      return <Loading />
  }

  return (
    <Users users={users} />
    
  );
}

export default Home;
