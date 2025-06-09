import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector((state) => state.cart.totalItems);

  return (
    <header>
      <Link to="/products">🪴 Products</Link> | 
      <Link to="/cart">🛒 Cart ({cartCount})</Link>
    </header>
  );
}

export default Header;
