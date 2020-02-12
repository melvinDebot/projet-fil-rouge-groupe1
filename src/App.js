import React from 'react';
import Filter from './Components/Filter';
import Carte from './Components/Maps';
import ButtonNav from './Components/ButtonNav';
import './App.scss';
import ListShop from './Components/ListShop';


export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filter: {      
        show: false
      }
    }
    this.toggleFilter = this.toggleFilter.bind(this)
  }

  toggleFilter() {
    const { filter } = this.state
    filter.state = filter.state === true ? false : true;
    this.setState({
      "filter": filter
    }) 
  }

  render() {
    return(
      <div className="App">
        < Filter />
        < ButtonNav eden="Liste" toggleClick={this.toggleFilter.bind(this)}/>
        {this.setState.filter ? <ListShop /> : ""}
        < Carte />
      </div>
    )
  }
}


export default App;