import React from 'react';

function MarkerDetail(props){
  const style = {
    "width": "343px",
    "height": "156px",
    "backgrounColor" : "red"
  }
  return(
    <div style={style}>
        <p>{props.Nom}</p>
    </div>
  )
}

export default MarkerDetail;