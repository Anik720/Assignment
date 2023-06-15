import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Header from "./shared/Header";
import { Route, Routes } from "react-router-dom";
import User from "./features/users/User";
import "react-toastify/dist/ReactToastify.css";
import UserDetails from "./features/users/UserDetails";
import Admin from "./features/admins/Admin";
import Employee from "./features/employees/Employee";
import UserUpdate from "./features/users/UserUpdate";
import { ToastContainer } from "react-toastify";
import HomePage from "./shared/Homepage";

function App() {
  return (
    <div className="bg bg-sky-500/50 h-screen">
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/Employee" element={<Employee></Employee>}></Route>
        <Route path="/Admin/:id" element={<UserDetails></UserDetails>}></Route>
        <Route
          path="/Employee/:id"
          element={<UserDetails></UserDetails>}
        ></Route>
        <Route
          path="/Admin/update/:id"
          element={<UserUpdate></UserUpdate>}
        ></Route>
        <Route
          path="/Employee/update/:id"
          element={<UserUpdate></UserUpdate>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
