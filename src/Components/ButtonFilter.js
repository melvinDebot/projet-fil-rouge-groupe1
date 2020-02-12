import React from 'react';

class ButtonFilter extends React.Component{
  render(){
    return(
        <button className="button-filter" onClick={this.props.toogle}></button>
    )
  }
}

export default ButtonFilter;