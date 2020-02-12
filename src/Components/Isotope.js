import React from 'react';
import {Markers} from './Maps';
import { element } from 'prop-types';

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
      <div className="all">
        <button
          onClick={()=>{ this.filtre("Restaurant") }}
          className="tech"
        >
          Restaurant
        </button>
        <button
          onClick={()=>{ this.filtre("Cinema") }}
          className="tech"
        >
          Cinema
        </button>
      </div>
    );
  }
}

export default Isotope;