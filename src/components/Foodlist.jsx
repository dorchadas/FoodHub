import React, { useState } from "react";

const FoodList = ({ cartItems, setCartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]); // Track added items

  const fetchCategoryData = async (category) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setFoodItems(data.meals || []);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchCategoryData(category);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setAddedItems((prevItems) => [...prevItems, item.idMeal]); // Track added item by id
  };

  return (
    <div>
      <div className="categories">
        <p onClick={() => handleCategoryClick("Fast Food")}>Fast Food</p>
        <p onClick={() => handleCategoryClick("Drinks")}>Drinks</p>
        <p onClick={() => handleCategoryClick("Dessert")}>Dessert</p>
        <p onClick={() => handleCategoryClick("Beef")}>Meat</p>
        <p onClick={() => handleCategoryClick("Veg")}>Veg</p>
      </div>

      <div className="food-items">
        <div className="items">
          {foodItems.length > 0 ? (
            <div className="image">
              {foodItems.map((item) => (
                <div className="api-styles" key={item.idMeal}>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    style={{ width: "180px", borderRadius: "25px" }}
                  />
                  <p style={{ fontSize: "20px" }}>{item.strMeal}</p>
                  <button
                    style={{
                      borderRadius: "10px",
                      width: "150px",
                      height: "50px",
                      backgroundColor: addedItems.includes(item.idMeal) ? "#7C6354" : "#9046CF",
                    }}
                    onClick={() => handleAddToCart(item)} 
                    disabled={addedItems.includes(item.idMeal)} // Disable button if already added
                  >
                    <h3>{addedItems.includes(item.idMeal) ? "Added to Cart" : "Add To Cart"}</h3>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <h2
              style={{
                textAlign: "center",
                padding: "30px",
                color: "red",
              }}
            >
              Items Not Available Right Now
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodList;
