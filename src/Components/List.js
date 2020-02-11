import React from 'react';
import imgOne from './../assets/imgOne.png'


function List(props){
  return(
    <div className="box">
      <div className="box--img">
        <img src={imgOne} alt="" />
        <div className="block--img">{props.meter}</div>
      </div>
      <div className="box--text">
        <p>Name: {props.name}</p>
      </div>
      <div className="box--desc">
        <p className="desc">Ouvert</p>
        <p>{props.heu}</p>
      </div>
    </div>
  )
}

export default List;