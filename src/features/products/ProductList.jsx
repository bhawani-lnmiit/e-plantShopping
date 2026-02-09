import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";

// Sample plant data with categories
const productsData = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Aloe Vera", price: 250, image: "/images/aloe.jpg" },
      { id: 2, name: "Snake Plant", price: 300, image: "/images/snake.jpg" },
      { id: 3, name: "Peace Lily", price: 400, image: "/images/peace.jpg" },
      { id: 4, name: "Spider Plant", price: 350, image: "/images/spider.jpg" },
      { id: 5, name: "Rubber Plant", price: 450, image: "/images/rubber.jpg" },
      { id: 6, name: "Fiddle Leaf", price: 500, image: "/images/fiddle.jpg" },
    ],
  },
  {
    category: "Outdoor Plants",
    items: [
      { id: 7, name: "Rose", price: 200, image: "/images/rose.jpg" },
      { id: 8, name: "Tulip", price: 180, image: "/images/tulip.jpg" },
      { id: 9, name: "Marigold", price: 150, image: "/images/marigold.jpg" },
      { id: 10, name: "Hibiscus", price: 220, image: "/images/hibiscus.jpg" },
      { id: 11, name: "Lavender", price: 300, image: "/images/lavender.jpg" },
      { id: 12, name: "Sunflower", price: 250, image: "/images/sunflower.jpg" },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(productsData[0].category);

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
    alert(`${product.name} added to cart!`);
  };

  const category = productsData.find(cat => cat.category === selectedCategory);

  return (
    <div className="product-list">
      <h1>Plant Shop Products</h1>

      {/* Navigation Tabs */}
      <div className="category-tabs">
        {productsData.map(cat => (
          <button
            key={cat.category}
            className={selectedCategory === cat.category ? "active" : ""}
            onClick={() => setSelectedCategory(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {category.items.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
