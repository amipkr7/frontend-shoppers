import React, { useContext } from 'react';
import '../CartItems/CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      <div>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img className="carticon-product-icon" src={e.image} alt="" />
                  <p>{e.name}</p>
                  <p>₹{e.new_price}</p>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <p>₹{e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

        <div className="cartitems-down">
          <h1>cartTotals</h1><br /><br /><br />
          <div className="cartitems-total">
            <br />
           
          </div>
          <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />

              <div className="cartitems-total-item">
                <p>Shipping fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount()}</h3>
              </div>
            </div>
          {/* <div className="cartitems-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo-code" />
              <button>Submit</button>
            </div>
          </div> */}
        </div>
        <button className="btn">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartItems;
