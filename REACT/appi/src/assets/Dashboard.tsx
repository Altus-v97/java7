import React, { useState } from "react";
import Sidebar from "./SideBar";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <DashboardContent
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default Dashboard;
