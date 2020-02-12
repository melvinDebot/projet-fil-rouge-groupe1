import React from 'react';
import List from './List';

function ListShop(props){
  let shops = props.filter.map((shop, i) => {
    return <List name={shop.name} heu={shop.heu} meter={shop.meter} key={i}/>
  })
  return(
    <div className="list_shop_container">
      <h1>Restaurant</h1>
      {shops}
    </div>
  )
}
export default ListShop;