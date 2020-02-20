import React from 'react';
import ListShop from '../ListShop/ListShop';
import './filter.scss';
import ButtonNav from '../ButtonNav/ButtonNav';

class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false,
      users: [],
      shops : [
        
      ],
      searchDog: '',
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(json => this.setState({ shops: json }));
    console.log(this.state.shop)
  }


  handleClick = () => {
    this.setState({ show : true })
  }
  
  handleInput = (e) =>{
    console.log(this.state.show)
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
            onClick={this.handleClick}
          />
          {this.state.show ? <ListShop filter={filter} close={(()=>{
            this.setState({show : false} )
          })}/> : ""}
          <ButtonNav clicked={this.handleClick}/>
        </div>
      </div>
      
    )
  }
}

export default Filter;