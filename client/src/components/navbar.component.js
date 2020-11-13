import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav>
        <Link to="/">Superhero Database</Link>
        <div>
          <ul>
            <li className="navbar-item">
              <Link to="/" className="nav-link">Superheroes</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create New Superhero</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
