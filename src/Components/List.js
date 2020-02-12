import React from 'react';

function List(props){
  return(
    <div className="box">
      <div className="box--img">
        <div className="block--img">{props.meter}</div>
      </div>
      <div className="box--text">
        <p>{props.name}</p>
      </div>
      <div className="box--desc">
        <p className="desc">Ouvert</p>
        <p>{props.heu}</p>
      </div>
    </div>
  )
}

export default List;