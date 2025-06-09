import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const plants = [
  { id: 1, name: "Aloe Vera", price: 100, category: "Succulents", image: "/aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 120, category: "Air Purifying", image: "/snake.jpg" },
  { id: 3, name: "Peace Lily", price: 130, category: "Flowering", image: "/lily.jpg" },
  { id: 4, name: "Cactus", price: 90, category: "Succulents", image: "/cactus.jpg" },
  { id: 5, name: "Areca Palm", price: 200, category: "Air Purifying", image: "/palm.jpg" },
  { id: 6, name: "Orchid", price: 300, category: "Flowering", image: "/orchid.jpg" },
];

function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div>
      <h2>Our Plants</h2>
      <div>
        {plants.map((plant) => (
          <div key={plant.id}>
            <img src={plant.image} alt={plant.name} width="100" />
            <h3>{plant.name}</h3>
            <p>₹{plant.price}</p>
            <button
              onClick={() => dispatch(addItem(plant))}
              disabled={isInCart(plant.id)}
            >
              {isInCart(plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
