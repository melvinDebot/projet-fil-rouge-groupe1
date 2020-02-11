import React from 'react';

function InputFilter(props){
  return(
    <div className="wrapper-input">
      <input onChange={props.handleInput} type="text" placeholder="Recherche"/>
    </div>
  )
}

export default InputFilter;