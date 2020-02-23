import React from 'react';
import './App.scss';
import axios from 'axios';


// Import Components
import Maps from './Components/Maps/Maps';
import Filter from './Components/Filter/Filter';
import ButtonFilter from './Components/ButtonFilter';
import Isotope from './Components/Isotope/Isotope';
import ButtonDataviz from './Components/ButtonDataviz/ButtonDataviz';

// //Import Assets
// import concert from './Assets/Icone/concert_marker.svg';
// import parc from './Assets/Icone/parc_marker.svg';
// import musee from './Assets/Icone/musee_marker.svg';
// import monument from './Assets/Icone/monument_marker.svg';



export default class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      
      isotope: {
        state: false,
        show : true,
        shops: [],
        // list : [
        //   {
        //     id : 1,
        //     name : "Concert",
        //     title : "Le duc",
        //     longitude : 2.4211505003287126,
        //     latitude : 48.8512844148994,
        //     active : false ,
        //     time : 10,
        //     url : concert
        //   },
        //   {
        //     id : 2,
        //     name : "Parc",
        //     title : "Parc foresstier",
        //     longitude : 2.418229003786947,
        //     latitude : 48.850736553471464,
        //     active : false, 
        //     time : 30,
        //     url : parc 
        //   },
        //   {
        //     id : 3,
        //     name : "Musee",
        //     title : "Louvre",
        //     longitude : 2.430304002373407,
        //     latitude : 48.843756303946755,
        //     active : false, 
        //     time : 50,
        //     url : musee 
        //   },
        //   {
        //     id : 4,
        //     name : "Monument",
        //     title : "Louvre",
        //     longitude : 2.430994731014011,
        //     latitude : 48.84238356306906,
        //     active : false, 
        //     time : 60,
        //     url : monument   
        //   },
        // ]
      }
    }
    this.setList = this.setList.bind(this)
    this.toogleIsotopeState = this.toogleIsotopeState.bind(this)
  }

  getShops() {
    axios.get("http://127.0.0.1:8000/api/bibliotheques/?hydra:member")
    .then(response =>
      response.data['hydra:member'].map(shop => ({
        Nom: `${shop.Nom}`,
        numero: `${shop.numero}`,
        Rue: `${shop.Rue}`,
        coordonne: `${shop.coordonne}`.split(","),
      }))
    )
    .then((isotope) => {
      this.setState({
        shops : isotope.shops
      });
    })
    .catch(error => this.setState({ error }));
  }

  componentDidMount(){
    this.getShops()
    // console.log(this.state.isotope.shops)
  }

  toogleIsotopeState() {
    const { isotope } = this.state
    isotope.state = isotope.state === true ? false : true
    // console.log(isotope)
    
    this.setState({
      "isotope" : isotope
    })
  }

  setList(shops) {
    const {isotope} = this.state
    isotope["shops"] = shops

    this.setState({
      "isotope" : isotope
    })
  }

  render(){
    const {isotope} = this.state
    console.log(this.state)
    return(
      <div className="App">
        <Filter  />
        <ButtonFilter toogle={this.toogleIsotopeState} />    
        <ButtonDataviz />      
        
        <Maps shops={isotope.shops} />
        { isotope.state ? <Isotope shops={isotope.shops} setList={this.setList} close={this.toogleIsotopeState}/> : ''} 
        
      </div>
    )
  }
}