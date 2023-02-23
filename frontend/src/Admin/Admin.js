import React, { useState, useEffect } from "react";
import YodlrApi from "../Api/Api";
import LoadingSpinner from "../Common/LoadingSpinner";

function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(function getUsersOnMount() {
    async function getUsers() {
      try {
        const results= await YodlrApi.getUsers();
        setUsers(results)
      } catch (err) {
        console.log(err);
      }
    }
    getUsers();
  }, []);

  return (
    <div>
      {users ? (
        <div className="Admin">
          <div className="container text-center">
            <h1 className="font-weight-bold">Welcome to Admin</h1>
            <ul>
                {console.log(users)}
                {users.map(user =>(
                    <li key={user.id}>ID: {user.id} First Name: {user.firstName} Last Name: {user.lastName} Email: {user.email} Status: {user.state}</li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
export default Admin;
