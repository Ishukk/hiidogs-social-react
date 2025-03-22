// import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-full h-screen">
        <Navbar />
        <div className="flex">
          <div className="w-2/12 bg-blue-500">
            <Sidebar />
          </div>
          <div className="w-10/12 bg-blue-400">
            <div className=" w-1/1 items-center justify-center h-screen bg-gray-200">
              <h1 className="text-4xl font-bold text-blue-600">
                Hello, Tailwind with Vite!
                dashboard
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
