import React from "react";
import "./styles/navbar.css";
import { Home, User, Search, Settings } from "lucide-react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="bubble">
        <Home size={22} />
      </div>
      <div className="bubble">
        <Search size={22} />
      </div>
      <div className="bubble">
        <User size={22} />
      </div>
      <div className="bubble">
        <Settings size={22} />
      </div>
    </div>
  );
};

export default NavBar;
