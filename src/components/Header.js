import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="branding">
        <img src={logo} alt="" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/" className="menu-item">Rockets</a>
          </li>
          <li>
            <NavLink to="/missions" className="menu-item">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/" className="menu-item">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
