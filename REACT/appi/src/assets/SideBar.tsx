import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  
  return (
    <div
      className={`sidebar d-flex flex-column p-3 ${isOpen ? "open" : "closed"}`}
    >
      {/* Menu Button */}
      <div className="mb-4">
        <button
          className="btn btn-light text-dark"
          onClick={toggleSidebar}
          style={{ borderRadius: "8px" }}
        >
          <i className="bi bi-list fs-4"></i>
        </button>
      </div>

      {/* Top Links */}
      <div className="d-flex flex-column">
        <a href="#" className="sidebar-link">
          <i className="bi bi-house-door sidebar-icon"></i>
          <span className="link-text">Home</span>
        </a>
      </div>

      <div className="flex-grow-1"></div>

      {/* Bottom Links */}
      <div className="d-flex flex-column mt-3">
        <a href="#" className="sidebar-link">
          <i className="bi bi-gear sidebar-icon"></i>
          <span className="link-text">Opciones</span>
        </a>
        <a href="#" className="sidebar-link">
          <i className="bi bi-box-arrow-right sidebar-icon"></i>
          <span className="link-text" >Cerrar Sesión</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
