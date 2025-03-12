import React , {useState } from "react";
import UserCard from "./UserCard";

const Dashboard = () => {
    const [users] = useState([
      { name: " Sonam ", email: "sonam456@gmail.com", age: 17},
      { name: "Kajal", email: "kaju789@gmail.com", age: 19 },
      { name: "Poonam", email: "poonam123@gmail.com", age: 21 },
      { name: "Puja", email: "puja123@gmail.com", age: 23 },
      { name: "Prity", email: "prity456@gmail.com", age: 21 },
    ]);
  
    return(
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <div className="flex flex-wrap gap-4 justify-center">{users.map((user,index) => (<UserCard key = {index} {...user}/>
        ))}
        </div>
      </div>
    );
  };
   
  export default Dashboard;