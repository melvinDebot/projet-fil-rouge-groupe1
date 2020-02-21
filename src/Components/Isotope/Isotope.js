import React from 'react';
import "./isotope.scss";
import Checkbox from '@material-ui/core/Checkbox';

// import { element } from 'prop-types';

export class Isotope extends React.Component {
  constructor(props) {
    super(props);
    this.filtre = this.filtre.bind(this);    
    this.close = this.props.close
  }

  filtre ( name ) {
    const { list  } = this.props
    let newList = list.map( element => {
      if ( element.name === name)  {
        element.active = element.active === true ? false : true
        return element
      } else {
        return element
      }
    });
    console.log(newList)
    this.props.setList(newList)
  }

  filtreTime (time){
    const { list } = this.props
    let newListTime = list.map(elem => {
      if(elem.time === time){
        elem.active = elem.active === true ? false : true
        return elem
      } else {
        return elem
      }
    })
    console.log(newListTime)
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
        <div className="isotope--time">
          <h4>Temps disponible </h4>
          <div>
            <button onClick={()=> {this.filtreTime(10)}}>10min</button>
            <button onClick={()=> {this.filtreTime(20)}}>20min</button>
            <button onClick={()=> {this.filtreTime(30)}}>30min</button>
            <button onClick={()=> {this.filtreTime(40)}}>+30min</button>
            <button onClick={()=> {this.filtreTime(50)}}>1h - 2h</button>
          </div>
        </div>
        <div className="isotope-horaire">
          <h4>Plage Horaire </h4>
          De <input placeholder="12h" type="text" /> à <input placeholder="14h" type="text" /> 
        </div>
        <div className="isotope--time">
          <h4>Temps disponible </h4>
          <div>
            <button onClick={()=> {this.filtreTime(2)}}>2min</button>
            <button onClick={()=> {this.filtreTime(5)}}>5min</button>
            <button onClick={()=> {this.filtreTime(10)}}>10min</button>
            <button onClick={()=> {this.filtreTime(20)}}>20min</button>
            <button onClick={()=> {this.filtreTime(30)}}>30min</button>
            <button onClick={()=> {this.filtreTime(40)}}>+30min</button>
          </div>
        </div>
        <div className="isotope--next">
          <button onClick={this.props.close}>Suivant</button>
        </div>
        
      </div>
    );
  }
}

export default Isotope;