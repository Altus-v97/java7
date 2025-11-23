import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./assets/Dashboard";
import LoginScreen from "./assets/Login";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
     
      {isAuthenticated ? (
       
        <Dashboard />
      ) : (
       
        <LoginScreen onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;



// #82e1df
// #ea96df
// #ff65b3
// #fcd72c
// #ffdd63
// #ede342
// #f2bf6c
//