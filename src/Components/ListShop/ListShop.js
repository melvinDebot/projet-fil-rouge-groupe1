import React from 'react';
import List from '../List/List';
import './listShop.scss';

function ListShop(props){
  let shops = props.filter.map((shop, i) => {
    return <List Nom={shop.Nom} Rue={shop.Rue} numero={shop.numero} key={i} onClick={props.out}/>
  })
  return(
    <div className="list_shop_container">
      <div className="close" onClick={props.close}></div>
      <h1>Bibliothèque</h1>
      {shops}
    </div>
  )
}

export default ListShop;