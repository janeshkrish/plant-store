import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      <p>Total Items: {cart.totalItems}</p>
      <p>Total Price: ₹{cart.totalPrice}</p>

      {cart.items.map(item => (
        <div key={item.id}>
          <img src={item.image} width="50" />
          <span>{item.name} - ₹{item.price} x {item.quantity}</span>
          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      <Link to="/products"><button>Continue Shopping</button></Link>
    </div>
  );
}

export default CartPage;
