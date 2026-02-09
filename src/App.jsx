import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="landing-page">
      {!showProducts ? (
        <>
          <h1>Welcome to Paradise Nursery</h1>
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default App;
