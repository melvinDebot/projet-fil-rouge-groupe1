import React from 'react';
import './buttonData.scss';

class ButtonDataviz extends React.Component{
  render(){
    return(
      <button className="button-data" onClick={this.props.clicked}></button>
    )
  }
}

export default ButtonDataviz;