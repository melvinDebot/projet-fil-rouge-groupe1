import React from 'react';

import ListShop from '../ListShop/ListShop';
import './filter.scss';

class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false,
      shops : [
        {name : 'La Grande Cuisine', heure : "Mer. 14h-16h", meter : "400m"},
        {name : 'Chez Pierrot', heure : "Mer. 12h-15h",  meter : "50m"},
        {name : 'Le Bon Chef ', heure : "Mer. 12h-19h", meter : "100m"},
      ],
      searchDog: '',
    }
  }
  handleClick = () => {
    this.setState({ show : true })
  }
  handleClickOut = () => {
    this.setState({ show : false})
  }
  handleInput = (e) =>{
    console.log(e.target.value)
    this.setState({ searchDog : e.target.value})
    this.handleClick()
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
            onInput={this.handleInput}
          />
          {this.state.show ? <ListShop filter={filter} /> : ""}
        </div>
      </div>
      
    )
  }
}

export default Filter;