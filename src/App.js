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
import { ServicesContext } from "./data/services.context";
import { BusinessContext } from './data/business.context';

function App() {
  return (
    <div className="App">
      <div>
        <ServicesContext>
          <BusinessContext>
            <Routes>
              <Route path="" element={<Menu />} />
              <Route path="/Customer" element={<Customer />}>
                <Route path=":newMeeting" element={<Meeting />} >
                </Route>
              </Route>
              <Route path="/Login" element={<Login />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Business" element={<Business />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Meetings" element={<Meetings />} />
              <Route path="*" element={<h1> Ooops!!<br></br> your address is'nt valid, check it and try again! </h1>} />
            </Routes>
          </BusinessContext>
        </ServicesContext>
      </div>
    </div >
  );
}

export default App;
