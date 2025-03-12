import React from "react";

const UserCard = ({ name , email , age}) => {
    return (
      <div>
        <h3 className="text-xl font-semibold ">{name}</h3>
        <p className="text-gray-500">Email : {email}</p>
        <p className="text-gray-500">Age : {age}</p>
      </div>
    );
  };

  export default UserCard;