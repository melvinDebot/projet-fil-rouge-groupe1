import React from 'react';
import ListShop from '../ListShop/ListShop'
import './filter.scss';
import axios from 'axios';

class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false,
      shops : [],
      searchDog: '',
      isLoading: true,
      errors: null
    }
  }

  getShops() {
    axios.get("http://127.0.0.1:8000/api/bibliotheques/?hydra:member")
    .then(response =>
      response.data['hydra:member'].map(shop => ({
        Nom: `${shop.Nom}`,
        numero: `${shop.numero}`,
        Rue: `${shop.Rue}`
      }))
    )
    .then(shops => {
      this.setState({
        shops,
        isLoading: false,
      });
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount(){
    this.getShops()
  }


  handleClick = () => {
    this.setState({ show : true })
  }
  
  handleInput = (e) =>{
    this.setState({ searchDog : e.target.value})
    this.handleClick()
  }

  render(){
    const {shops} = this.state;
    let filter = Array.isArray(this.state.shops) ? this.state.shops.filter((shop) => {
      return shop.Nom.toLowerCase().includes(this.state.searchDog.toLowerCase());
    }) : "";

    return(
      <div className="filter_input_container">
        <div className="wrapper_input">
          <input 
            type="text" 
            placeholder="Rechercher un lieu" 
            className="input-filter" 
            onInput={this.handleInput}
            onClick={this.handleClick}
          />
       
          { this.state.show ? (
              shops.map(shop => {
                const { Nom } = shop;
                return <ListShop key={Nom} filter={filter} shop={shop} close={( () => {
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