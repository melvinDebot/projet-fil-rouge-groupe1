import React from 'react';
import List from '../List/List';
import './listShop.scss';

function ListShop(props){
  let shops = props.filter.map((shop, i) => {
    return <List name={shop.name} heu={shop.heure} meter={shop.meter} key={i} onClick={props.out}/>
  })
  return(
    <div className="list_shop_container">
      <h1>Restaurant</h1>
      {shops}
      <h1>Boutique</h1>
      {shops}
    </div>
  )
}
export default ListShop;