import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar/Sidebar";
import Right from "./Components/Navbar/Right/Right";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Right />
    </div>
  );
};

export default App;
