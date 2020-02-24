import React from 'react';
import imgOne from '../../Assets/imgOne.png'
import "./list.scss";

function List(props){
  return(
    <div className="box">
      <div className="box_img">
        <img src={imgOne} alt="" />
<<<<<<< HEAD
=======
        <div className="block_img">{props.numero}</div>
>>>>>>> 2e0c6e9700e48eb6923aa77dc9c057473a23586e
      </div>

      <div className="box_text">
        <p>{props.Nom}</p>
      </div>

      <div className="box_desc">
        <p className="desc">Ouvert</p>
<<<<<<< HEAD
=======
        <p>{props.Rue}</p>
>>>>>>> 2e0c6e9700e48eb6923aa77dc9c057473a23586e
      </div>
    </div>
  )
}

export default List;
