import React from 'react';
import './buttonNav.scss';

// The Map/List button component 
class ButtonNav extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      colorBlue : "#0885C2",
      colorWhite : "#fff"
    };
  }

  // toggle color on click
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
          <p>Map</p>
        </div>
        <div className="button-item btn_list" 
          style={{background : this.state.colorWhite, color : this.state.colorBlue}}
          onClick={this.props.clicked}
        >
        <p>List</p>
        </div>
      </div> 
    )
  }
  
}

export default ButtonNav;