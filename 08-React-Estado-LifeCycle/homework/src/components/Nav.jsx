import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar-custom">
      <div className="left">
        <img src={Logo} className="logoHenry" alt="" />      
        <span className="navbar-brand mb-0 h1">Henry - Weather App</span>
      </div>
      <div className="right">
        <SearchBar onSearch={ onSearch }/>
      </div>
    </nav>
  );
};

export default Nav;
