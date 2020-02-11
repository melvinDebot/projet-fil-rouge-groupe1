import React from 'react';

function List(props){
  return(
    <div className="box">
      <div className="box--img">
        <div className="block--img">400mm</div>
      </div>
      <div className="box--text">
        <p>Name: {props.name}</p>
      </div>
      <div className="box--desc">
        <p className="desc">Ouvert</p>
        <p>{props.breed}</p>
      </div>
    </div>
  )
}

export default List;