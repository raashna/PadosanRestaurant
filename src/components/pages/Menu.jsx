import React from "react";
import { useState } from "react";
import "./Menu.css";
const menuData = [
  {
    category: "BEVERAGES",
    items: [
      "mineral water",
      "fresh lime water",
      "soda",
      "soda (60ml )",
      "fresh lime soda",
      "tea",
      "lemon tea",
      "green tea",
      "masala tea",
      "coffee",
      "black coffee",
      "cappuccino",
      "cold coffee",
      "cold coffee with ice cream",
      "masala cold drink",
      "cold drink (200 ml )",
      "cold drink(300 ml )",
      "cold drink (600 ml )",
      "cold drink (700 ml )",
      "cold drink ( 2 ltr.)",
    ],
    prices: [25,
      36,
      25,
      40,
      51,
      26,
      21,
      65,
      60,
      42,
      48,
      90,
      72,
      100,
      60,
      20,
      30,
      50,
      60,
      125,],
  },
// Item 2


   { category: "SNACKS",
    items: [
      "Peanut",
"Peanut Masala",
"Kaju Fry",
"Finger Chips",
"Veg Pakora",
"Onion Pakora",
"Onion Chhinta Pakora",
"GOBHI PAKORA",
"PANEER PAKORA",
"CHEESE PAKORA",
"aloo pakora",
"egg pakora",
"cheese balls",
"paneer cutlet",
"veg cutlet",
"cheese cherry pineapple stick",
"murg pakora"
    ],
    prices: [75,
      94,
      200,
      150,
      111,
      120,
      120,
      120,
      140,
      100,
      190,
      140,
      180,
      140,
      110,
      170,
      210
      ],
  },

// Item 3


{ category: "SANDWICH",
items: [
  "cheese grilled sandwich",
  "corn spinach sandwich",
  "paneer sandwich",
  "veg salad sandwich",
  "mushroom cheese sandwich",
  "smoke grilled sandwich",
  "masala aloo sandwich",
  "seed american magic sandwich",
  "veg magic sandwich"
  
],
prices: [55,
  85,
  90,
  66,
  95,
  85,
  87,
  72,
  51
  ],
},

  
];

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);

  const handleToggleCategory = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? "" : category
    );
  };

  const handleAddToCart = (item, price) => {
    setCart([...cart, { item, price }]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="menu-section">
      <div className="menu-heading">
        <h4>Menu</h4>
      </div>
      <div className="menu-bar">
        {menuData.map((categoryData) => (
          <span
            key={categoryData.category}
            onClick={() => handleToggleCategory(categoryData.category)}
            className={`menu-category ${
              selectedCategory === categoryData.category ? "active" : ""
            }`}
          >
            {categoryData.category}
          </span>
        ))}
      </div>
      <div className="menu-list">
        {menuData.map((categoryData) => (
          <div
            key={categoryData.category}
            className={`menu-category-items ${
              selectedCategory === categoryData.category ? "visible" : ""
            }`}
          >
            <h6>{categoryData.category}</h6>
            <ul>
              {categoryData.items.map((item, index) => (
                <li key={index}>
                  <span>{`${item} - Rs ${categoryData.prices[index]}`}</span>
                  <button
                    onClick={() =>
                      handleAddToCart(item, categoryData.prices[index])
                    }
                    className="add-to-cart"
                  >
                    +
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="total-section">
        <h6>Total:</h6>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <span>{`${item.item} - Rs ${item.price}`}</span>
              <button
                onClick={() => handleRemoveFromCart(index)}
                className="remove-from-cart"
              >
                -
              </button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${calculateTotal()}</p>
      </div>
    </div>
  );
};