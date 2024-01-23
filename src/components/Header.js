import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from "../logo.png";
import caddie from "../caddie.png";
import "../stylesheets/Header.scss";



const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
       <img className='mainLogo' src={logo} alt="Mister Shoes" onClick={() => navigate("/")} />
       <div className='basketContainer'><img className='basket' src={caddie} alt="basket" onClick={() => navigate("/cart")} /></div>
       <div></div>
    </header>
  )
}

export default Header