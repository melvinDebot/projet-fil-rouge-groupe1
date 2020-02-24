import React from 'react';
import './App.scss';
import axios from 'axios';


// Import Components
import Maps from './Components/Maps/Maps';
import Filter from './Components/Filter/Filter';
import ButtonFilter from './Components/ButtonFilter';
import Isotope from './Components/Isotope/Isotope';
import ButtonDataviz from './Components/ButtonDataviz/ButtonDataviz';
import ListActivty from './Components/ListActivity/ListActivity';
import ButtonNav from './Components/ButtonNav/ButtonNav';

// // Import Assets
// import concert from './Assets/Icone/concert_marker.svg';
// import parc from './Assets/Icone/parc_marker.svg';
// import musee from './Assets/Icone/musee_marker.svg';
// import monument from './Assets/Icone/monument_marker.svg';
// import ButtonNav from './Components/ButtonNav/ButtonNav';

export default class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      
      isotope: {
        state: false,
        show : true,
        shops: [],
      },
      showMe : false
    }
    this.setList = this.setList.bind(this)
    this.toogleIsotopeState = this.toogleIsotopeState.bind(this)
    this.showMe = this.showMe.bind(this)
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
    .then((shops) => {
      let isotope = this.state.isotope
      isotope.shops = shops
      this.setState({
        isotope
      });
    })
    .catch(error => this.setState({ error }));
  }

  componentDidMount(){
    this.getShops()
  }

  toogleIsotopeState() {
    const { isotope } = this.state
    isotope.state = isotope.state === true ? false : true
    
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

  showMe() {
    this.setState({ showMe : !this.state.showMe})
    console.log(this.state.showMe)
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
        <ButtonNav clicked={this.showMe}/>
        {this.state.showMe ? <ListActivty /> : ""}
      </div>
    )
  }
}