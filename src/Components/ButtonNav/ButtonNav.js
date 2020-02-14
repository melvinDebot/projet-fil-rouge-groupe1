import React from 'react';
import './buttonNav.scss';


const white = '#fff';
const blue = '#0885C2';

class ButtonNav extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: white };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(){
    const newColor = this.state.color === white ? blue : white;
    this.setState({ color: newColor })
  }

  render() {
    return(
      <div className="button">
        <div className="button-item btn_cart" style={{background: this.state.color}} onClick={!this.changeColor}>
            <p style={{color: this.state.color}} onClick={this.changeColor}>Carte</p>
        </div>
  
        <div className="button-item btn_list" onClick={this.props.toggleClick} style={{background: this.state.color}}>
        <p style={{color: this.state.color}} onClick={this.changeColor}>Liste</p>
        </div>
      </div> 
    )
  }
  
}

export default ButtonNav;