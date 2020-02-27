import React from 'react';
import ListShop from '../ListShop/ListShop'
import './filter.scss';
import axios from 'axios';

class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false,
      sports : [],
      searchDog: '',
      isLoading: true,
      errors: null
    }
  }

  //call API of table epreuves
  getSports() {
    axios.get("http://127.0.0.1:8000/api/epreuves/?hydra:member")
    .then(response =>
      response.data['hydra:member'].map(sport => ({
        Nom: `${sport.Nom}`,
        Zone: `${sport.Zone}`,
        Longitude: `${sport.Longitude}`,
        Latitude: `${sport.Latitude}`
      }))
    )
    .then(sports => {
      this.setState({
        sports,
        isLoading: false,
      });
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount(){
    this.getSports()
  }


  handleClick = () => {
    this.setState({ show : true })
  }
  
  handleInput = (e) =>{
    this.setState({ searchDog : e.target.value})
    this.handleClick()
  }

  render(){
    const {sports} = this.state;

    // filter component ListShop (liste site sportifs) with the name of each element 
    let filter = Array.isArray(this.state.sports) ? this.state.sports.filter((sport) => {
      return sport.Nom.toLowerCase().includes(this.state.searchDog.toLowerCase());
    }) : "";

    return(
      <div className="filter_input_container">
        <div className="wrapper_input">
          <input 
            type="text" 
            placeholder="Search an Olympic venue" 
            className="input-filter" 
            onInput={this.handleInput}
            onClick={this.handleClick}
          />
       
          { this.state.show ? (
              sports.map(sport => {
                const { Nom } = sport;
                return <ListShop key={Nom} filter={filter} sport={sport} close={( () => {
                  this.setState({show : false} )
                })}/> 
              })
            ) : (
              " "
          )}
          
        </div>
      </div>
    )
  }
}

export default Filter;