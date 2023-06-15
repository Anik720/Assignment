import React from "react";
import User from "../users/User";
import Header from "../../shared/Header";

const Admin = () => {
  let userType = "Admin";
  return (
    <div>
      <Header></Header>
      <User userType={userType}></User>
    </div>
  );
};

export default Admin;
