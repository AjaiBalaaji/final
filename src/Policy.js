import React from "react";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import "./Policy.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Menu() {
  const nav = useNavigate();
    const handlePolicy=()=>{
        nav("/Policy")
            }
  return (
    <div className="menu">
      <div className="back">
      <Link to="/Navbar">
          <button>Back</button>
        </Link>
        </div>
      <h1 className="menuTitle">POLICY PROVIDERS...</h1>
      <div className="fendu">Your Health, Your Way</div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default Menu;