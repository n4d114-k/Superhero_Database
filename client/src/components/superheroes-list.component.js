import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';



export default class SuperheroesList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 5,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {
      axios.get('http://localhost:5000/superheroes/')
          .then(res => {

              const data = res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(pd => <tr id={pd._id} key={pd._id}>
                      <td>{pd.nickname}</td>
                      <td>{pd.real_name}</td>
                      <td>{pd.origin_description}</td>
                      <td>{pd.superpowers.join(', ')}</td>
                      <td>{pd.catch_phrase}</td>
                      <td className="buttons">
                        <Link className="button button-green" to={"/edit/"+pd._id}>details</Link><button className="button button-red" onClick={() => { this.deleteSuperhero(pd._id) }}>delete</button>
                      </td>
              </tr>)

              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                  postData
              })
          });
  }

  deleteSuperhero(id) {
    axios.delete('http://localhost:5000/superheroes/'+id)
      .then(response => { console.log(response.data)});
    {document.getElementById(id).remove();}
  }

  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
      return (
          <div>
              <div className="superheroes-list">
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
                    { this.state.postData }
                  </tbody>
                </table>
              </div>
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>

      )
  }
}
