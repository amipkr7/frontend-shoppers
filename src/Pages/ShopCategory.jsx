import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Assets/Item/Item';
import './CSS/ShopCategory.css'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product?.map((item, i) => {
         console.log(props.category);
         console.log(item.category)
          if (props.category === item.category) {
            console.log(item.old_price);
            console.log(i);
            console.log(item.id)
            return (
              
              <Item
                // key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
                
              />
            );
          } else {
            return null;
          }
        })}
       
      </div>
      <div className="shopcategory-loadmore">
        Explore More...
        </div>
    </div>
  );
};

export default ShopCategory;
