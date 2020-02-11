import React from 'react';
import List from './List';

function ListShop(props){
  let dogs = props.filter.map((dog, i) => {
    return <List name={dog.name} breed={dog.breed} key={i}/>
  })
  return(
    <div className="containt">
      {dogs}
    </div>
  )
}
export default ListShop;