import React , { useState} from "react";
import { BrowserRouter as Router , Routes ,Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";

const App = () => {
  return ( 
    <Router>
      <div className="min-h-screen bg-gray-100 ">
        <nav className="bg-blue-600 p-4 flex justify-center gap-6">
          <Link to="/ " className="text-white text-lg font-semibold">Home</Link>
          <Link to="/dashboard " className="text-white text-lg font-semibold">Dashboard</Link>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}; 
export default App;