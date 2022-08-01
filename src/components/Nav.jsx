import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom'; //matchear link con ruta

function Nav({onSearch}) {
  return (
    <nav>
      
      <Link className = "link" to='/'>
      <div className = "WeatherApp">
          <img id="logoHenry" src={Logo} className="logo" alt="" />
           <span>Weather Home</span>
        </div>
      </Link>

      <Link to='/about'>
        <span className="About">About</span>
      </Link>
        <SearchBar
          onSearch={onSearch}
          
        />
    </nav>
  );
};
export default Nav;
