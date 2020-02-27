import React from 'react';
import './buttonData.scss';

// Component opening dataviz
class ButtonDataviz extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <button className="button-data" onClick={this.props.clicked}></button>

    )
  }
}

export default ButtonDataviz;