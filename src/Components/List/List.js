import React from 'react';
import imgOne from '../../Assets/imgOne.png'
import "./list.scss";

function List(props){
  return(
    <div className="box">
      <div className="box_img">
        <img src={imgOne} alt="" />
      </div>

      <div className="box_text">
        <p>{props.Nom.toLowerCase()}</p>
        <span>{props.Zone}</span>
      </div>
    </div>
  )
}

export default List;