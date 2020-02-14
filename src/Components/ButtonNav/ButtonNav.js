import React from 'react';
import './buttonNav.scss';

const styleButtonOne = {
  background : "#0885C2",
  colorText : '#fff'
}
const styleButtonTwo = {
  background : "#fff",
  colorText : '#0885C2'
}

class ButtonNav extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
    };
  }

  handleToggle = () => {
    
  }


  render() {
    return(
      <div className="button">
        <div className="button-item btn_cart" 
          style={styleButtonOne} 
        >
            <p>Carte</p>
        </div>
  
        <div className="button-item btn_list" style={styleButtonTwo}>
        <p>Liste</p>
        </div>
      </div> 
    )
  }
  
}

export default ButtonNav;