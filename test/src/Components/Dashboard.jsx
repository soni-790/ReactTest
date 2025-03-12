import React, { useState } from "react";
import UserCard from "./UserCard";

const Dashboard = () => {
    const [users] = useState([
      { name: "sonu", email: "sonu123@gmail.com", age: 15 },
      { name: "kaju", email: "kaju456@gmail.com", age: 16},
      { name: "mannu", email: "mannu789@gmail.com", age: 17 },
      { name: "annu", email: "annu567@gmail.com", age: 18 },
      { name: "poonam", email: "poonam777@gmail.com", age: 19 },
    ]);
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    );
  };

export default Dashboard;
