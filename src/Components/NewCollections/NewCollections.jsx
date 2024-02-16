import React from 'react'
import '../NewCollections/NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Assets/Item/Item'
function NewCollections() {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((items,i)=>{
            return <Item id={items.id} image={items.image} name={items.name} old_price={items.old_price} new_price={items.new_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections
