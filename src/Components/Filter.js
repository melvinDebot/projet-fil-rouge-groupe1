import React from 'react';
import './../App.scss';
import InputFilter from './InputFilter';
import ListShop from './ListShop';

class Filter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dogs : [
        {name : 'La Grande Cuisine', breed : "Mer. 14h-16h", meter : "400m"},
        {name : 'Chez Pierrot', breed : "Mer. 12h-15h"},
        {name : 'Le Bon Chef ', breed : "Mer. 12h-19h"},
      ],
      searchDog: '',
      show : false,
    }
  }
  handleInput = (e) =>{
    console.log(e.target.value)
    this.setState({ searchDog : e.target.value})
  }
  handleClick = () => {
    this.setState({ show : true})
    console.log('oke')
  }
  render(){
    let filter = this.state.dogs.filter((dog) => {
      return dog.name.toLowerCase().includes(this.state.searchDog.toLowerCase())
    })
    return (
      <div className="list_container">
      <div className="wrapper_input">
        <input 
            type="text" 
            placeholder="Rechercher un lieu" 
            className="input-filter" 
            onClick={this.handleClick}
            onInput={this.handleInput}
          />
      </div>
        <h1>Restaurant</h1>
        
        {this.state.show ? <ListShop filter={filter}/>  : ""}
      </div>
      
    );
  }
  
}
export default Filter;