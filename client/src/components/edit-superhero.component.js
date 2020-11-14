import React, { Component } from 'react';
import axios from 'axios';

export default class EditSuperhero extends Component {
  constructor(props) {
    super(props);

    this.onChangeNickname = this.onChangeNickname.bind(this);
    this.onChangeRealName = this.onChangeRealName.bind(this);
    this.onChangeOriginDescription = this.onChangeOriginDescription.bind(this);
    this.onChangeSuperpowers = this.onChangeSuperpowers.bind(this);
    this.onChangeCatchPhrase = this.onChangeCatchPhrase.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nickname: '',
      real_name: '',
      origin_description: '',
      superpowers: [],
      catch_phrase: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/superheroes/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          nickname: response.data.nickname,
          real_name: response.data.real_name,
          origin_description: response.data.origin_description,
          superpowers: response.data.superpowers,
          catch_phrase: response.data.catch_phrase,
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/superheroes/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            superheroes: response.data.map(superhero => superhero.nickname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeNickname(e) {
    this.setState({
      nickname: e.target.value
    })
  }

  onChangeRealName(e) {
    this.setState({
      real_name: e.target.value
    })
  }

  onChangeOriginDescription(e) {
    this.setState({
      origin_description: e.target.value
    })
  }

  onChangeSuperpowers(e) {
    this.setState({
      superpowers: e.target.value.split(',')
    })
  }

  onChangeCatchPhrase(e) {
    this.setState({
      catch_phrase: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const superhero = {
      nickname: this.state.nickname,
      real_name: this.state.real_name,
      origin_description: this.state.origin_description,
      superpowers: this.state.superpowers,
      catch_phrase: this.state.catch_phrase
    }

    console.log(superhero);

    axios.post('http://localhost:5000/superheroes/update/' + this.props.match.params.id, superhero)
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div className="superhero-form edit-superhero">
      <h3>Details</h3>

      <form onSubmit={this.onSubmit}>

        <div>
          <label>Nickname: </label>
          <input type="text"
              required
              defaultValue={this.state.nickname}
              onChange={this.onChangeNickname}
              />
        </div>

        <div>
          <label>Real Name: </label>
          <input  type="text"
              required
              defaultValue={this.state.real_name}
              onChange={this.onChangeRealName}
              />
        </div>

        <div>
          <label>Origin Description: </label>
          <input  type="text"
              required
              defaultValue={this.state.origin_description}
              onChange={this.onChangeOriginDescription}
              />
        </div>

        <div>
          <label>Superpowers: </label>
          <input  type="text"
              required
              defaultValue={this.state.superpowers}
              onChange={this.onChangeSuperpowers}
              />
        </div>

        <div>
          <label>Catch Phrase: </label>
          <input  type="text"
              required
              defaultValue={this.state.catch_phrase}
              onChange={this.onChangeCatchPhrase}
              />
        </div>

        <div>
          <input className="button button-blue" type="submit" value="Save Changes" />
        </div>

      </form>

    </div>
    )
  }
}
