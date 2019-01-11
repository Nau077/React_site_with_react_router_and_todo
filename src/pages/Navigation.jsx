import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div className="NavDiv">
      <NavLink to="/">NewsPage</NavLink>     
     
      <NavLink to="/Contact">Contact</NavLink>

      <NavLink to="/About">About</NavLink>
    </div>
  );
};

export default Navigation;