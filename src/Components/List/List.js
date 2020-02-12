import React from 'react';
import imgOne from '../../Assets/imgOne.png'


function List(props){
  return(
    <div className="box">
      <div className="box_img">
        <img src={imgOne} alt="" />
        <div className="block_img">{props.meter}</div>
      </div>
<<<<<<< HEAD:src/Components/List.js
      <div className="box--text">
        <p>{props.name}</p>
=======
      <div className="box_text">
        <p>Name: {props.name}</p>
>>>>>>> a8efa0d7c9d31f080cbf43292c8e29fb4762a8be:src/Components/List/List.js
      </div>
      <div className="box_desc">
        <p className="desc">Ouvert</p>
        <p>{props.heu}</p>
      </div>
    </div>
  )
}

export default List;