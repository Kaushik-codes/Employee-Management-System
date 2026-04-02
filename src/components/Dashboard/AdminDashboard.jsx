import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";



const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 p-8">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-blue-700/10 rounded-full blur-3xl" />
      </div>

      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;