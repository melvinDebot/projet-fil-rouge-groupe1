import React from 'react';
import List from '../List/List';
import './listShop.scss';

function ListShop(props){
  let shops = props.filter.map((shop, i) => {
<<<<<<< HEAD
    return <List Nom={shop.Nom} key={i} onClick={props.out}/>
=======
    return <List Nom={shop.Nom} Rue={shop.Rue} numero={shop.numero} key={i} onClick={props.out}/>
>>>>>>> 2e0c6e9700e48eb6923aa77dc9c057473a23586e
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
