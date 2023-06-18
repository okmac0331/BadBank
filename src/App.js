import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./context";
import NavBar from "./Navbar";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import AllData from "./Alldata";

function App() {
  return (
    <Router>
      <NavBar />
      <UserContext.Provider
        value={{ users: [{ name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 }] }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createAccount/" element={<CreateAccount />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
