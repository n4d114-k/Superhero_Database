import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Superhero = props => (
  <tr>
    <td>{props.superhero.nickname}</td>
    <td>{props.superhero.real_name}</td>
    <td>{props.superhero.origin_description}</td>
    <td>{props.superhero.superpowers}</td>
    <td>{props.superhero.catch_phrase.split(',')}</td>
    <td className="buttons">
      <Link className="button button-green" to={"/edit/"+props.superhero._id}>edit</Link> <br /> <a className="button button-red" href="#" onClick={() => { props.deleteSuperhero(props.superhero._id) }}>delete</a>
    </td>
  </tr>
)

export default class SuperheroesList extends Component {
  constructor(props) {
    super(props);

    this.deleteSuperhero = this.deleteSuperhero.bind(this)

    this.state = {superheroes: []}; //???
  }

  componentDidMount() {
    axios.get('http://localhost:5000/superheroes/')
      .then(response => {
        this.setState({ superheroes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSuperhero(id) {
    axios.delete('http://localhost:5000/superheroes/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      superheroes: this.state.superheroes.filter(el => el._id !== id)
    })
  }

  superheroesList() {
    return this.state.superheroes.map(currentsuperhero => {
      return <Superhero superhero={currentsuperhero} deleteSuperheroes={this.deleteSuperhero} key={currentsuperhero._id}/>;
    })
  }

  render() {
    return (
      <div className="superheroes-list">
        <h3>Superheroes List</h3>
        <table>
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Real Name</th>
              <th>Origin Description</th>
              <th>Superpowers</th>
              <th>Catch Phrase</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.superheroesList() }
          </tbody>
        </table>
      </div>
    )
  }
}
