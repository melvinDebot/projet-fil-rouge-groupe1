import React from 'react';
import "./isotope.scss";
import Checkbox from '@material-ui/core/Checkbox';


export class Isotope extends React.Component {
  constructor(props) {
    super(props);
    this.filtre = this.filtre.bind(this);    
    this.close = this.props.close
    this.state = {
      selectedShops : []

    }
    // this.filtreEvents = this.filtreEvents.bind(this);    

  }



  filtre (shop) {
    // const { shops  } = this.props
    console.log(shop)
    this.setState({selectedShops: [...this.state.selectedShops, shop]})
    console.log('aaaaaa' + this.state.selectedShops)
    // let newList = shops.map( element => {
    //   if ( element.shop )  {
    //     console.log(element.shop)
    //     element.active = element.active === true ? false : true
    //     return element
    //   } else {
    //     return element
    //   }
    // });
    // //console.log(newList)
    // this.props.setList(newList)
  }

  // filtreEvents(index) {
  //   const { shops  } = this.props
  //   let newList = shops.map( event => {
  //     if( event.shops[index] === event.shop[0] ) {
  //       return event.shops[0]
  //     } 
  //     console.log(shops[0], "index")

  //   })
  //   this.props.setList(newList)
  // }

  filtreTime (time) {
    const { shops } = this.props
    let newListTime = shops.map(elem => {
      if(elem.time === time){
        elem.active = elem.active === true ? false : true
        return elem
      } else {
        return elem
      }
    })
    //console.log(newListTime)
    this.props.setList(newListTime)
  }

  render() {
    const {shops} = this.props
    // console.log(shops[0], shops[1], shops[2], shops[3] )
    return (
      <div className="isotope-containt">
        <span className="close" onClick={this.props.close}></span>
        <div className="isotope--block">
          <h3>Filtres</h3>
          <h4>Type d'activité</h4>
            <div className="isotope-button">
              <label>
                <Checkbox
                onClick={()=>{ this.filtre(shops[0]) }}
                className="filter_checkbox filter_checkbox_concert"
                />
              
              Concert
            </label>
            <label>
              <Checkbox
                onClick={()=>{ this.filtre(shops[1]) }}
                className="filter_checkbox filter_checkbox_parc"
              />
              Parcs
            </label>
            <label>
              <Checkbox
                onClick={()=>{ this.filtre(shops[2]) }}
                className="filter_checkbox filter_checkbox_monument"
              />
              Monuments
            </label>
            <label>
              <Checkbox
                onClick={()=>{ this.filtre(shops[3]) }}
                className="filter_checkbox filter_checkbox_musee"
              />
              Musées
            </label>
          </div>
        </div>
        <div className="isotope_time_container">
          <h4>Distance (temps de marche à pieds)</h4>
          <div className="isotope_time_bloc">
            <button onClick={()=> {this.filtreTime(2)}}>2min</button>
            <button onClick={()=> {this.filtreTime(5)}}>5min</button>
            <button onClick={()=> {this.filtreTime(10)}}>10min</button>
            <button onClick={()=> {this.filtreTime(20)}}>20min</button>
            <button onClick={()=> {this.filtreTime(30)}}>30min</button>
            <button onClick={()=> {this.filtreTime(40)}}>+30min</button>
          </div>
        </div>
        <div className="isotope_cta">
          <button onClick={this.props.close}>Suivant</button>
        </div>

      </div>
    );
  }
}

export default Isotope;