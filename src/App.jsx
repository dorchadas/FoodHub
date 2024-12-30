import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ImageContent from "./components/ImageContent";
import TopPicks from "./components/TopPicks";
import OurProducts from "./components/OurProducts";
import Footer from "./components/Footer";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import MealSearch from "./components/MealSearch";

function App() {
  const [cartItems, setCartItems] = useState([]); // Manage cart items

  // Add item to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Delete item from cart
  const handleDelete = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.length} />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageContent />
                
                <FoodList cartItems={cartItems} setCartItems={setCartItems} />
                <div>
                  <h1 style={{padding:"50px", paddingLeft:"30%", color:"navy"}}>You Didn't Found Food You Looking For? </h1>
                </div>
                <MealSearch cartItems={cartItems} setCartItems={setCartItems} />
                <TopPicks />
                <OurProducts />
              </>
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} onDelete={handleDelete} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;