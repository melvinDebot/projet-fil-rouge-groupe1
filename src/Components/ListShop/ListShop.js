import React from 'react';
import List from '../List/List';
import './listShop.scss';

function ListShop(props){
  let shops = props.filter.map((shop, i) => {
    return <List Nom={shop.Nom} Zone={shop.Zone} key={i} onClick={props.out}/>
  })
  return(
    <div className="list_shop_container">
      <div className="close" onClick={props.close}></div>
      <div className="list_shop_title">
        <h1>Jeux Olympiques Paris 2024</h1>
        <h1>Sites sportifs</h1>
      </div>
      {shops}
    </div>
  )
}

export default ListShop;