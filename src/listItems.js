


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './list-items.css'; 


function ListItems(props) {
  const items = props.items;
  const list_items = items.map(item => {
    return <div className="ListItems" key={item.key}>
      <p>
        <input type="text" id={item.key} value={item.ToDo} onChange={(e)=> {
          props.setUpdate(e.target.value, item.key)}} />
        
          <span>
              <FontAwesomeIcon className="faicons" onClick={()=>{
              props.deleteItem(item.key) }} icon="trash" />
          </span>
      </p>
        
        </div>})


  return (
    <div>
      {list_items}
    </div>
  );

}

export default ListItems
