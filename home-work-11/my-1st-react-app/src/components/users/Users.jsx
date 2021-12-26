import React from "react";
import UserCard from "../userCard/UserCard";
import "./Users.scss"

const users = [
    {
      name: "Alex",
      age: 25,
      email: "alex1990@gmail.com"
    },
    {
      name: "Maria",
      age: 23,
      email: "maria_92@gmail.com"
    },
    {
      name: "Victor",
      age: 33,
      email: "victor_ttt@gmail.com"
    },
    {
      name: "Helen",
      age: 19,
      email: "ololo_h@gmail.com"
    },
    {
      name: "Nik",
      age: 37,
      email: "niko@gmail.com"
    },
    {
      name: "Alex",
      age: 25,
      email: "alex1990@gmail.com"
    },
    {
      name: "Maria",
      age: 23,
      email: "maria_92@gmail.com"
    },
    {
       name: "Victor",
       age: 33,
        email: "victor_ttt@gmail.com"
    },
    {
      name: "Helen",
      age: 19,
       email: "ololo_h@gmail.com"
    },
    {
       name: "Nik",
       age: 37,
       email: "niko@gmail.com"
    }
    
  ]

function Users() {
    return (
        <div className="users">
             {users.map((user, index) =>
                <React.Fragment key={index}>
                    <UserCard user={user}/>
                    <hr/>
                </React.Fragment>
                )}
        </div>
    )
}

export default Users;