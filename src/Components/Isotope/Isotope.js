import React from 'react';
import "./isotope.scss";
import Checkbox from '@material-ui/core/Checkbox';

// import { element } from 'prop-types';

export class Isotope extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickTech = this.handleClickTech.bind(this);
    this.filtre = this.filtre.bind(this);    
    this.close = this.props.close
  }

  handleClickTech() {
    this.setState(state => {

    })
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
        
      </div>
    );
  }
}

export default Isotope;