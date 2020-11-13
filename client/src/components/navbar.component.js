import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav>
        <Link className="main" to="/">Superhero Database</Link>
        <ul>
          <li className="navbar-item">
            <Link to="/">Superheroes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create">Create New Superhero</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
