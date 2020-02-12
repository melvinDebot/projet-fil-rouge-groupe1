import React from 'react';
import '../App.scss';
import ListShop from './ListShop';
import ButtonNav from './ButtonNav';

class Filter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shops : [
        {name : 'La Grande Cuisine', heu : "Mer. 14h-16h", meter : "400m"},
        {name : 'Chez Pierrot', heu : "Mer. 12h-15h", meter : "100m"},
        {name : 'Le Bon Chef ', heu : "Mer. 12h-19h", meter : "50m"},
      ],
      searchShop: '',
      show : false,
    }
  }
  handleInput = (e) =>{
    console.log(e.target.value)
  }
  handleClick = () => {
    console.log('ok')
    
    this.setState({ show : true})
  }
  render(){
    let filter = this.state.shops.filter((shop) => {
      return shop.name.toLowerCase().includes(this.state.searchShop.toLowerCase())
      console.log(filter)
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
        <ButtonNav toggleClick={this.handleInput}/>
        {this.state.show ? <ListShop filter={filter}/>  : ""}
      </div>
      
    );
  }
  
}
export default Filter;