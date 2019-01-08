import React from 'react';
import logo from '../logo.png';
import { NavLink, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
      <Link to="/" >
        <img 
          src={ logo } alt="SpaceX" 
          style={{ width: 250 }}
        />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-secondary"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ml-2 mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link text-white text-center" activeClassName="active-nav">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/launches" className="nav-link text-white text-center" activeClassName="active-nav">Launches</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/rockets" className="nav-link text-white text-center" activeClassName="active-nav">Rockets</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
