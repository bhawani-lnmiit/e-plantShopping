import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/CartSlice";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Helper to check if product already exists in cart
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // Product data grouped by category
  const categories = [
    {
      name: "Indoor Plants",
      products: [
        { id: 1, name: "Snake Plant", price: 299, image: "/images/snake.jpg" },
        { id: 2, name: "Peace Lily", price: 349, image: "/images/lily.jpg" },
        { id: 3, name: "Spider Plant", price: 199, image: "/images/spider.jpg" },
        { id: 4, name: "Aloe Vera", price: 249, image: "/images/aloe.jpg" },
        { id: 5, name: "Money Plant", price: 179, image: "/images/money.jpg" },
        { id: 6, name: "ZZ Plant", price: 399, image: "/images/zz.jpg" }
      ]
    },
    {
      name: "Outdoor Plants",
      products: [
        { id: 7, name: "Rose Plant", price: 299, image: "/images/rose.jpg" },
        { id: 8, name: "Jasmine", price: 259, image: "/images/jasmine.jpg" },
        { id: 9, name: "Hibiscus", price: 279, image: "/images/hibiscus.jpg" },
        { id: 10, name: "Bougainvillea", price: 319, image: "/images/bougainvillea.jpg" },
        { id: 11, name: "Tulsi", price: 149, image: "/images/tulsi.jpg" },
        { id: 12, name: "Lavender", price: 349, image: "/images/lavender.jpg" }
      ]
    }
  ];

  return (
    <div className="product-list-container">
      <h1 className="page-title">Our Plants Collection</h1>

      {categories.map((category) => (
        <div key={category.name} className="category-section">
          <h2 className="category-title">{category.name}</h2>

          <div className="product-grid">
            {category.products.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>
                <p className="price">₹{plant.price}</p>

                <button
                  className="add-to-cart-btn"
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
