import React from 'react';
import './App.scss';

// Import Components
import Maps from './Components/Maps/Maps';
import Filter from './Components/Filter/Filter';
import ButtonFilter from './Components/ButtonFilter';
import Isotope from './Components/Isotope/Isotope';
import ButtonDataviz from './Components/ButtonDataviz/ButtonDataviz';

//Import Assets
import concert from './Assets/Icone/concert_marker.svg';
import parc from './Assets/Icone/parc_marker.svg';
import musee from './Assets/Icone/musee_marker.svg';
import monument from './Assets/Icone/monument_marker.svg';



export default class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      isotope: {
        state: false,
        show : true,
        list : [
          {
            id : 1,
            name : "Concert",
            title : "Le duc",
            longitude : 2.4211505003287126,
            latitude : 48.8512844148994,
            active : false ,
            time : 10,
            url : concert
          },
          {
            id : 2,
            name : "Parc",
            title : "Parc foresstier",
            longitude : 2.418229003786947,
            latitude : 48.850736553471464,
            active : false, 
            time : 30,
            url : parc 
          },
          {
            id : 3,
            name : "Musee",
            title : "Louvre",
            longitude : 2.430304002373407,
            latitude : 48.843756303946755,
            active : false, 
            time : 50,
            url : musee 
          },
          {
            id : 4,
            name : "Monument",
            title : "Louvre",
            longitude : 2.430994731014011,
            latitude : 48.84238356306906,
            active : false, 
            time : 60,
            url : monument   
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
        
        <Maps list={isotope.list} />
        { isotope.state ? <Isotope list={isotope.list} setList={this.setList} close={this.toogleIsotopeState}/> : ''} 
        
      </div>
    )
  }
}