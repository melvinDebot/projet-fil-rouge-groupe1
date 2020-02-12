import React from 'react';
import ButtonNav from './../ButtonNav/ButtonNav';
import ListShop from '../ListShop/ListShop';
import './filter.scss';

class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false,
      shops : [
        {name : 'La Grande Cuisine', heure : "Mer. 14h-16h", meter : "400m"},
        {name : 'Chez Pierrot', heure : "Mer. 12h-15h"},
        {name : 'Le Bon Chef ', heure : "Mer. 12h-19h"},
      ],
      searchDog: '',
    }
  }
  handleClick = () => {
    this.setState({ show : true })
  }
  handleInput = (e) =>{
    console.log(e.target.value)
    this.setState({ searchDog : e.target.value})
  }
  render(){
    let filter = this.state.shops.filter((shop) => {
      return shop.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
    })
    return(
      <div className="filter_input_container">

        <div className="wrapper_input">
          <input 
            type="text" 
            placeholder="Rechercher un lieu" 
            className="input-filter" 
            onClick={this.handleClick}
            onInput={this.handleInput}
          />
          {this.state.show ? <ListShop filter={filter}/> : ""}
        </div>
      </div>
      
    )
  }
}

export default Filter;