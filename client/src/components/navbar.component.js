import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav>
        <h1 className="main">Superhero Database</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create New Superhero</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
