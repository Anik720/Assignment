import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./shared/Header";
import { Route, Routes } from "react-router-dom";
import User from "./features/users/User";
import UserDetails from "./features/users/UserDetails";
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={<Header></Header>}></Route> */}
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/user/:id" element={<UserDetails></UserDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
