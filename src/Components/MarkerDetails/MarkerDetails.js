import React from 'react';
import './markerDetails.scss';

function MarkerDetails(props){

  return(
    <div className="marker_details_container">
      <div className="close" onClick={props.close}></div>
      <div className="marker_name">
        {props.Nom}
      </div>
      <div>
        <button onClick={props.close}
        >Validate</button>
      </div>
    </div>
  )
}

export default MarkerDetails;