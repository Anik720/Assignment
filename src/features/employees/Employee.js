import React from "react";
import User from "../users/User";
import Header from "../../shared/Header";
const Employee = () => {
  let userType = "Employee";
  return (
    <div>
      <Header></Header>
      <User userType={userType}></User>
    </div>
  );
};

export default Employee;
