import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import SuperheroesList from "./components/superheroes-list.component";
import EditSuperhero from "./components/edit-superhero.component";
import CreateSuperhero from "./components/create-superhero.component";


function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path="/" exact component={SuperheroesList} />
        <Route path="/edit/:id" component={EditSuperhero} />
        <Route path="/create" component={CreateSuperhero} />
      </div>
    </Router>
  );
}

export default App;
