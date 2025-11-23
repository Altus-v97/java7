import React from "react";
import "./Dashboard.css";

interface GameOption {
  id: number;
  title: string;
  img: string;
}

interface DashboardContentProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  const games: GameOption[] = [
    { id: 1, title: "Juego de Animales", img: "🦁" },
    { id: 2, title: "Juego de Colores", img: "🎨" },
    { id: 3, title: "Juego de Formas", img: "🔺" },
    { id: 4, title: "Juego de Instrumentos", img: "🎸" },
  ];

  return (
    <div
      className={`main-content p-5 ${
        isSidebarOpen ? "content-shifted" : "content-full"
      }`}
    >
      {/* Header Area */}
      <div className="d-flex align-items-center mb-5">
        {!isSidebarOpen && (
          <button
            className="btn btn-light me-3 shadow-sm"
            onClick={toggleSidebar}
          >
            <i className="bi bi-list"></i>
          </button>
        )}
      </div>
      <div>
        <h1 className="display-6 fw-bold" style={{ color: "#333" }}>
          Bienvenido Usuario
        </h1>
      </div>
      {/* Cards Grid */}
      <div className="row g-4">
        {games.map((game) => (
          <div key={game.id} className="col-12 col-md-6">
            <div className="card game-card text-center d-flex align-items-center justify-content-center">
              <div className="card-body text-center d-flex align-items-center justify-content-center flex-column">
                <span style={{ fontSize: "4rem" }}>{game.img}</span>
                <h5 className="card-title mt-3">{game.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardContent;
