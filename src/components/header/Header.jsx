import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
      <span id='header_icon'><Link to="/">BingeBoard </Link></span>
      <div className="nav-links">
      <Link className= "header-link" to="/movies/upcoming"><span >Upcoming</span></Link>
      <Link className= "header-link" to="/movies/popular"><span>Popular</span></Link>
      <Link className= "header-link" to="/movies/top_rated"><span>Top-Rated</span></Link>
      
      {/* <div className='drop-down'>
      <span className='drop-btn'>Genres ▼</span>
      <div className='dropdown-content'>
        <Link to="/movies/Drama">Drama</Link>
        <Link to="/movies/Kids">Kids</Link>
        <Link to="/movies/Theater">Theater</Link>
      </div>
      </div> */}
      </div>
      </div>
    </div>
  )
}

export default Header