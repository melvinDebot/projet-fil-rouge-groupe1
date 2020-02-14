import React from 'react';
import imgOne from '../../Assets/imgOne.png'
import "./list.scss";

function List(props){
  return(
    <div className="box">
      <div className="box_img">
        <img src={imgOne} alt="" />
        <div className="block_img">{props.email}</div>
      </div>

      <div className="box_text">
        <p>{props.name}</p>
      </div>

      <div className="box_desc">
        <p className="desc">Ouvert</p>
        <p>{props.username}</p>
      </div>
    </div>
  )
}

export default List;