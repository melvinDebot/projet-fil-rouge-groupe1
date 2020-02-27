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

<<<<<<< HEAD
  componentDidMount(){
    fetch("https://www.w3dnetwork.com/api/4974193e295cc198b39049e3f670d747.json")
    .then(res => res.json())
    .then(json => this.setState({ shops: json }));
    console.log(this.state.shop)
=======
  componentDidMount() {
    fetch(`https://www.w3dnetwork.com/api/bf06ea2ceca83316c04a4264f91b0f3b.json`)
    .then(res => res.json())
    
>>>>>>> master
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
    console.log(this.state)
    let filter = Array.isArray(this.state.shops) ? this.state.shops.filter((shop) => {
      return shop.name.toLowerCase().includes(this.state.searchDog.toLocaleLowerCase())
    }) : []
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