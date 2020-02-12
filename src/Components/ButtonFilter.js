import React from 'react';
import Isotope from './Isotope';

class ButtonFilter extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <button className="button-filter" onClick={this.props.toogle}></button>
    )
  }
}

export default ButtonFilter;