import React from 'react';
<<<<<<< HEAD:src/Components/Filter.js
import '../App.scss';
import ListShop from './ListShop';
import ButtonNav from './ButtonNav';
=======
import ListShop from '../ListShop/ListShop';
import './filter.scss';
>>>>>>> a8efa0d7c9d31f080cbf43292c8e29fb4762a8be:src/Components/Filter/Filter.js

class Filter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shops : [
        {name : 'La Grande Cuisine', heu : "Mer. 14h-16h", meter : "400m"},
        {name : 'Chez Pierrot', heu : "Mer. 12h-15h", meter : "100m"},
        {name : 'Le Bon Chef ', heu : "Mer. 12h-19h", meter : "50m"},
      ],
      searchDog: '',
      show : false,
    }
  }
  handleInput = (e) =>{
    console.log(e.target.value)
    this.setState({ show : true})
  }
  handleClick = () => {
    console.log('oke')
  }
  render(){
    let filter = this.state.shops.filter((shop) => {
      return shop.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
    })
    return (
<<<<<<< HEAD:src/Components/Filter.js
      <div className="list_container">
=======
      <div className="filter_input_container">

>>>>>>> a8efa0d7c9d31f080cbf43292c8e29fb4762a8be:src/Components/Filter/Filter.js
        <div className="wrapper_input">
          <input 
              type="text" 
              placeholder="Rechercher un lieu" 
              className="input-filter" 
              onClick={this.handleClick}
              onInput={this.handleInput}
            />
        </div>
        <ButtonNav toggleClick={this.handleInput}/>
        {this.state.show ? <ListShop filter={filter}/>  : ""}
      </div>
      
    );
  }
  
}
export default Filter;