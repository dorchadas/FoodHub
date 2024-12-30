import React, { useState } from "react";

const MealSearch = ({ cartItems, setCartItems }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meal, setMeal] = useState(null);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleSearch = async () => {
    try {
      setError(null);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();

      if (data.meals) {
        setMeal(data.meals[0]);
      } else {
        setMeal(null);
        setError("No meals found for your search.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    }
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset message after 2 seconds
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Meal Finder</h1>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          marginRight: "10px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px",
          fontSize: "16px",
          backgroundColor: "#2D936C",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {meal && (
          <div style={{ textAlign: "center" }}>
            <h2>{meal.strMeal}</h2>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{
                width: "300px",
                borderRadius: "8px",
                marginTop: "10px",
              }}
            />
            <br />
            <br />
            <button
              onClick={() => handleAddToCart(meal)}
              style={{
                width: "120px",
                height: "50px",
                borderRadius: "15px",
                backgroundColor: "#7C6354",
              }}
            >
              {addedToCart ? "Added to Cart" : "Buy Now"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealSearch;