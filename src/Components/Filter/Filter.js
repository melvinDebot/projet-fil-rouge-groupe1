import React from 'react';
import ListShop from '../ListShop/ListShop';
import './filter.scss';
import ButtonNav from '../ButtonNav/ButtonNav';
import axios from 'axios';

class Filter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show : false,
      users: [],
      horaires: [],
      bibliotheques: [],
      searchDog: '',
    }
  }

  componentDidMount() {

    axios.get("http://127.0.0.1:8000/api/bibliotheques?page=1").then(res => {
      this.setState({bibliotheques: res.data});
      console.log(this.state.bibliotheques)
    })
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
    let filter = this.state.horaires.filter((horaire) => {
      return horaire.Name.toLowerCase().includes(this.state.searchDog.toLowerCase())
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