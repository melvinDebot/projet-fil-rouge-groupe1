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
        <p>{props.Nom}</p>
      </div>

      <div className="box_desc">
        <p className="desc">Ouvert</p>
      </div>
    </div>
  )
}

export default List;
