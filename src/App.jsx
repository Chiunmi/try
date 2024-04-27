import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar/Sidebar";
import Right from "./Components/Navbar/Right/Right";

const App = () => {
  return (
    <Router>
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <Navbar />
        <Sidebar />
        <Right />
      </div>
    </Router>
  );
};

export default App;
