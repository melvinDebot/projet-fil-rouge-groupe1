import React from 'react';
import './buttonNav.scss';

class ButtonNav extends React.Component {

  render() {
    return(
      <div className="button">
        <div className="button-item btn_cart">
            <p>Carte</p>
        </div>
  
        <div className="button-item btn_list" onClick={this.props.toggleClick}>
        <p>{this.props.eden}</p>
        </div>
      </div> 
    )
  }
  
}

export default ButtonNav;