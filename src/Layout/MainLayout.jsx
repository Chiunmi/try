import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Navbar/Sidebar/Sidebar";
import Right from "../Components/Navbar/Right/Right";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar> </Navbar>
      <Sidebar></Sidebar>
      <Right />
      <div> {children}</div>
    </div>
  );
}

export default MainLayout;
