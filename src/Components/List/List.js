import React from 'react';
import epreuves from '../../assets/epreuves.png'
import "./list.scss";

// Child Component of ListShop 
function List(props){
  return(
    <div className="box" onClick={props.clicked} >
      <div className="box_img">
        <img src={epreuves} alt="lieux-epreuves" />
      </div>

      <div className="box_text">
        <p>{props.Nom.toLowerCase()}</p>
        <span>{props.Zone}</span>
      </div>
    </div>
  )
}

export default List;