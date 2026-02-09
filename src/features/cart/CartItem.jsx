import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  return (
    <div className="cart-item">
      <h2>{item.name}</h2>
      <p>Price: ₹{item.price}</p>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={item.quantity} readOnly />
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleRemove}>Remove</button>
      <p>Total: ₹{item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
