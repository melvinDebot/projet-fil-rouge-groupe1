import React from 'react';
import "./isotope.scss";
import Checkbox from '@material-ui/core/Checkbox';

export class Isotope extends React.Component {
  constructor(props) {
    super(props);
    this.filtre = this.filtre.bind(this);    
    this.close = this.props.close
  }

  filtre ( name ) {
    const { shops  } = this.props
    let newList = shops.map( element => {
      if ( element.name === name)  {
        element.active = element.active === true ? false : true
        return element
      } else {
        return element
      }
    });
    //console.log(newList)
    this.props.setList(newList)
  }

  filtreTime (time){
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
    return (
      <div className="isotope-containt">
        <span className="close" onClick={this.props.close}></span>
        <div className="isotope--block">
          <h3>Filtres</h3>
          <h4>Type d'activité</h4>
            <div className="isotope-button">
              <label>
                <Checkbox
                onClick={()=>{ this.filtre("Concert") }}
                className="filter_checkbox filter_checkbox_concert"
                />
              
              Concert
            </label>
            <label>
              <Checkbox
                onClick={()=>{ this.filtre("Parc") }}
                className="filter_checkbox filter_checkbox_parc"
              />
              Parcs
            </label>
            <label>
              <Checkbox
                onClick={()=>{ this.filtre("Monument") }}
                className="filter_checkbox filter_checkbox_monument"
              />
              Monuments
            </label>
            <label>
              <Checkbox
                onClick={()=>{ this.filtre("Musee") }}
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