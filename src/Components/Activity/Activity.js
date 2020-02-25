import React from 'react';
import imgOne from '../../Assets/imgOne.png'

function Activity(props){
  return(
    <div className="box">
      <div className="box_img">
        <img src={imgOne} alt="" />
        <div className="block_img">{props.numero}</div>
      </div>

      <div className="box_text">
        <p>{props.Nom}</p>
        <span>{props.Rue}</span>
        <span>{props.Lieux}</span>
      </div>
    </div>
  )
}

export default Activity;