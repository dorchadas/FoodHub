import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, onDelete }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    margin: "0 auto",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const productStyle = {
    display: "flex",
    alignItems: "center",
    flex: 1,
  };

  const imageStyle = {
    width: "100px",
    borderRadius: "10px",
    marginRight: "20px",
  };

  const emptyMessageStyle = {
    // paddingtop:"8px",
    fontSize: "30px",
    color: "gray",
    textAlign: "center",
  };

  const buttonStyle = {
    width: "100px",
    height: "40px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "50px",
  };

  const buttonHoverStyle = {
    backgroundColor: "darkgreen",
  };

  return (
    <div style={containerStyle}>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} style={itemStyle} className="cart-item">
            <div style={productStyle} className="added-product">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                style={imageStyle}
                className="product-image"
              />
              <p>{item.strMeal}</p>
            </div>
            <div>
              <button
                onClick={() => onDelete(index)}
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = "darkgreen")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
              >
                Delete
              </button>
              <button
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = "darkgreen")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
              >
                Buy
              </button>
            </div>
          </div>
        ))
      ) : (
        <>
          <h1 style={emptyMessageStyle} className="empty-cart-message">
            No Thing To Show Here
          </h1>
          <br />
          <br />
          <Link to="/">
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = "darkgreen")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
              className="go-shopping-button"
            >
              Go Shopping
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;