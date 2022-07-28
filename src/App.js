//import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/menu";
import { Login } from "./components/login";
import { Customer } from "./components/customer";
import { Meeting } from "./components/meeting";
import { Admin } from "./components/admin";
import { Services } from "./components/services";
import { Business } from "./components/business";
import { Meetings } from "./components/meetings";
import { Context } from "./data/context";


function App() {
  return (
    <div className="App">
      <div>
        <Context>
          <Routes>
            <Route path="" element={<Menu />} />
            <Route path="/Customer" element={<Customer />}>
              {/* <Route path=":serviceId" element={<Service />} > */}
              <Route path=":newMeeting" element={<Meeting />} >
              </Route>
            </Route>
            <Route path="/Admin" element={<Admin />}></Route>
            <Route path="/Login" element={<Login />}>
            </Route>
            {/* <Route path="/Login" element={<Business />} /> */}
            <Route path="*" element={<h1> Ooops!!<br></br> your addres is'nt valid, check it and try again! </h1>} />
          </Routes>
        </Context>
      </div>
    </div >
  );
}

export default App;
