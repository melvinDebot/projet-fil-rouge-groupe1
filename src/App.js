import React from 'react';
import './App.scss';

// Import Components
import Maps from './Components/Maps/Maps';
import Filter from './Components/Filter/Filter';
import ButtonFilter from './Components/ButtonFilter';
import Isotope from './Components/Isotope/Isotope';
import ButtonDataviz from './Components/ButtonDataviz/ButtonDataviz';
import ButtonNav from './Components/ButtonNav/ButtonNav';


export default class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      isotope: {
        state: false,
        show : true,
        list : [
          {
            id : 1,
            name : "Restaurant",
            title : "Le duc",
            longitude : 2.4211505003287126,
            latitude : 48.8512844148994,
            active : false ,
            url : '../../Assets/Icone/park.svg'     
          },
          {
            id : 2,
            name : "Cinema",
            title : "Gaumont",
            longitude : 2.418229003786947,
            latitude : 48.850736553471464,
            active : false      
          },
        ]
      }
    }
    this.setList = this.setList.bind(this)
    this.toogleIsotopeState = this.toogleIsotopeState.bind(this)
  }

  toogleIsotopeState() {
    const { isotope } = this.state
    isotope.state = isotope.state === true ? false : true
    console.log(isotope)
    
    this.setState({
      "isotope" : isotope
    })
  }

  setList(list) {
    const {isotope} = this.state
    isotope["list"] = list

    this.setState({
      "isotope" : isotope
    })
  }

  render(){
    const {isotope} = this.state
    return(
      <div className="App">
        <Filter  />
        <ButtonFilter toogle={this.toogleIsotopeState} />    
        <ButtonDataviz />      
        <ButtonNav />
        <Maps list={isotope.list} />
        { isotope.state ? <Isotope list={isotope.list} setList={this.setList} close={this.toogleIsotopeState}/> : ''}
      </div>
    )
  }
}