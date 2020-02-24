import React from 'react';
import './buttonNav.scss';

class ButtonNav extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      colorBlue : "#0885C2",
      colorWhite : "#fff"
    };
  }

  handleToggle = () => {
    this.setState ({
      colorBlue : this.state.colorWhite,
      colorWhite : this.state.colorBlue
    })
  }

  
  render() {
    return(
      <div className="button" onClick={this.handleToggle}>
        <div className="button-item btn_cart" 
          style={{background : this.state.colorBlue, color : this.state.colorWhite}}
        >
          <p>Carte</p>
        </div>
        <div className="button-item btn_list" 
          style={{background : this.state.colorWhite, color : this.state.colorBlue}}
          onClick={this.props.clicked}
        >
        <p>Liste</p>
        </div>
      </div> 
    )
  }
  
}

export default ButtonNav;