import React from 'react';
import List from '../List/List';
import './listShop.scss';

function ListShop(props){
  let sports = props.filter.map((sport, i) => {
    return <List Nom={sport.Nom} Zone={sport.Zone} key={i} onClick={props.out}/>
  })
  return(
    <div className="list_shop_container">
      <div className="close" onClick={props.close}></div>
      <div className="list_shop_title">
        <h1>Paris Olympics 2024</h1>
        <h1>Choose an Olympics venue</h1>
      </div>
      {sports}
    </div>
  )
}

export default ListShop;