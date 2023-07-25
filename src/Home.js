import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
function Home() {
   const nav = useNavigate();
        const handleHome=()=>{
       nav("/Home")
        }
  return (
    <div className="home" style={{ backgroundImage: `url(https://images.pexels.com/photos/255527/pexels-photo-255527.jpeg?auto=compress&cs=tinysrgb&w=600)` }}>
      <div className="headerContainer">
        <h1> <div className="med">MEDCARE+</div></h1>
        <br></br>
        <p>Your Health, Our Priority<br></br>Comprehensive Insurance Solutions at Your Fingertips</p>
        <Link to="/Navbar">
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;