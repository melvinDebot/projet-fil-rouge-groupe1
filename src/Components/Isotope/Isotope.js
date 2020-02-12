import React from 'react';
import "./isotope.scss";
// import { element } from 'prop-types';

export class Isotope extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickTech = this.handleClickTech.bind(this);
    this.filtre = this.filtre.bind(this);
  }

  handleClickTech(e) {
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
      <div className="isotope--block">
      <h3>Filtre</h3>
      <h4>Type d'activité</h4>
        <div className="isotope-button">
          <div>
            <button
              onClick={()=>{ this.filtre("Restaurant") }}
              className="tech"
            >
            </button>
            Concert
          </div>
          <div>
            <button
              onClick={()=>{ this.filtre("Cinema") }}
              className="tech"
            >
            </button>
            Cinema
          </div>
        </div>
      </div>
        
        
      </div>
    );
  }
}

export default Isotope;