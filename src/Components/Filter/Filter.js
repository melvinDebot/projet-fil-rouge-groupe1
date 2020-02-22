import React from 'react';
import './filter.scss';
import ButtonNav from '../ButtonNav/ButtonNav';
import axios from "axios";

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
    axios.get("http://127.0.0.1:8000/api/bibliotheques?hydra:member=9")
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
    const { isLoading, shops} = this.state;
    let filter = Array.isArray(this.state.shops) ? this.state.shops.filter((shop) => {
      return shop.Nom.toLowerCase().includes(this.state.searchDog.toLowerCase());
    }) : "";
    console.log(filter)

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
          { !isLoading ? (           
            shops.map(shop => {
            const { Nom, numero, Rue } = shop;
              return (
                <div key={Nom} >
                  <p>{Nom}</p>
                  <p>{numero}</p>
                  <p>{Rue}</p>
                  <hr />
                </div>
                )
              })
              ) : (
                <p>Loading...</p>
          )}

          {/* {this.state.show ? <ListShop filter={filter} close={(()=>{
            this.setState({show : false} )
          })}/> : ""} */}
          <ButtonNav clicked={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default Filter;