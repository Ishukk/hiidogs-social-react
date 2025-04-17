// import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Sidebar from "../components/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function Layout() {
  return(

      <div>
        <Header/>
        <Outlet/>
        <Sidebar/>
      </div>
  )
}

export default Layout;
