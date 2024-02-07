import React, { useState } from "react";
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
    prices: [
      25, 36, 25, 40, 51, 26, 21, 65, 60, 42, 48, 90, 72, 100, 60, 20, 30, 50,
      60, 125,
    ],
  },
  // Item 2

  {
    category: "SNACKS",
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
      "murg pakora",
    ],
    prices: [
      75, 94, 200, 150, 111, 120, 120, 120, 140, 100, 190, 140, 180, 140, 110,
      170, 210,
    ],
  },

  // Item 3

  {
    category: "SANDWICH",
    items: [
      "cheese grilled sandwich",
      "corn spinach sandwich",
      "paneer sandwich",
      "veg salad sandwich",
      "mushroom cheese sandwich",
      "smoke grilled sandwich",
      "masala aloo sandwich",
      "seed american magic sandwich",
      "veg magic sandwich",
    ],
    prices: [55, 85, 90, 66, 95, 85, 87, 72, 51],
  },
  {
    category: "PIZZA",
    items: [
      { name: "veg pizza", prices: [150, 189] },
      { name: "cheese pizza", prices: [165, 195] },
      { name: "italian fiesta pizza", prices: [190, 220] },
      { name: "magic masala pizza", prices: [175, 205] },
      { name: "mushroom mania pizza", prices: [180, 210] },
      { name: "paneer tikka pizza", prices: [195, 225] },
      { name: "murg fiest pizza", prices: [231, 280] },
      { name: "murg pizza", prices: [210, 261] },
      { name: "murg keema pizza", prices: [210, 260] },
      { name: "murg tikka pizza", prices: [222, 270] },
      { name: "egg bonanza pizza", prices: [240, 291] },
    ],
  },

  {
    category: "PASTA AND BURGER",
    items: [
      "crème cheese pasta(veg)",
      "crème cheese pasta(non veg)",
      "tangy tomato pasta",
      "paneer burger",
      "paneer jumbo burger",
      "veg mini burger",
      "veg jumbo burger",
      "chicken egg burger",
      "chicken jumbo burger",
      "chicken mini burger",
    ],
    prices: [120, 170, 150, 72, 135, 60, 120, 120, 150, 90],
  },

  {
    category: "COMBOS",
    items: [
      { name: "burger+coffee+fries", prices: [90, 189] },
      { name: "burger+fries+cold drink", prices: [99, 199] },
      { name: "pizza+burger+cold drink+fries", prices: [199, 210] },
      { name: "pizza+cold drink+fries", prices: [199, 210] },
      { name: "pizza+pasta+cold drink+fries", prices: [210, 270] },
    ],
  },

  {
    category: "SALAD AND PAPAD",
    items: [
      { name: "green salad", prices: [90, 60] },
      { name: "fruit salad", prices: [170, 90] },
      { name: "kachumber", prices: [110, 60] },
      { name: "choice of raita", prices: [90] },
      { name: "Padosan SPL. CHOICE OF RAITA", prices: [120] },
      { name: "CURD", prices: [70] },
      { name: "papad dry", prices: [24] },
      { name: "papad fry", prices: [33] },
      { name: "masala papad", prices: [51] },
    ],
  },
  {
    category: "DESSERT",
    items: [
      "kesar pista",
      "pista",
      "vanilla",
      "butterscotch",
      "tooti frooti",
      "chocolava",
      "chocolate mousse",
      "red velvet mousse",
      "pineapple pastry",
      "strawberry pastry",
      "red velvet pastry",
      "chocolate truffle pastry",
      "chena rasgulla",
      "kala jamun",
      "gulab jamun",
      "hot gulab jamun",
      "chena paies",
      "rasmalai",
      "chocolate brownie",
      "walnut brownie",
    ],
    prices: [
      90, 90, 100, 160, 160, 66, 51, 55, 45, 45, 66, 63, 15, 15, 15, 18, 36, 21,
      63, 63,
    ],
  },

  {
    category: "CHINESE",
    items: [
      "Padosan spl soup",
      "tomato soup",
      "hot and sour soup",
      "mushroom soup",
      "sweet corn soup",
      "cream soup",
      "veg manchao",
      "veg clear soup",
      "veg talumein soup",
    ],
    prices: [120, 120, 110, 120, 130, 130, 123, 111, 120],
  },

  {
    category: "SOUP NON VEG",
    items: [
      "murg spl. Soup",
      "murg hot and sour soup",
      "murg sweet corn soup",
      "murg cream soup",
      "murg manchao",
      "murg clear soup",
      "murg talumein soup",
      "murg egg soup",
      "murg noodle soup",
      "murg garlic soup",
      "murg egg drop soup",
    ],
    prices: [150, 140, 140, 135, 144, 132, 144, 135, 135, 130, 145],
  },

  {
    category: "Veg Rolls",
    items: [
      "Veg spring rolls",
      "veg paneer spring roll",
      "Veg roll",
      "paneer roll",
      "paneer cheese roll",
    ],
    prices: [165, 155, 99, 114, 180],
  },

  {
    category: "Non-Veg Rolls",
    items: [
      "egg roll",
      "double egg roll",
      "chicken roll",
      "chicken egg roll",
      "chicken spring roll",
    ],
    prices: [99, 130, 120, 130, 192],
  },

  {
    category: "NOODLES",
    items: [
      "veg noodles",
      "veg mix noodles",
      "szechaun noodles",
      "szechaun veg noodles",
      "paneer noodles",
      "paneer mushroom noodles",
      "veg noodles and fried rice",
    ],
    prices: [145, 180, 145, 155, 150, 185, 180],
  },

  {
    category: "NOODLES NON VEG",
    items: [
      "egg noodles",
      "chicken egg noodles",
      "szechaun chicken noodles",
      "chicken noodles",
      "mix non veg noodle",
    ],
    prices: [145, 160, 160, 165, 205],
  },

  {
    category: "CHILLIES AND MORE veg",
    items: [
      "veg chilly",
      "veg chilly gravy",
      "potato chilly",
      "paneer chilly gravy",
      "paneer chilly",
      "mushroom chilly",
      "mushroom chilly gravy",
      "baby corn chilly",
      "channa chilly",
      "veg manchurian",
      "paneer manchurian",
      "mushroom manchurian",
      "Padosan spl. Babycorn manchurian",
      "corn salt and pepper",
      "channa salt and pepper",
      "ginger paneer",
      "paneer salt n pepper",
      "VEG CRISPY",
      "american veg choupsey",
      "crispy mushroom pepper chilly",
      "crispy mushroom salt n pepper",
      "baby corn crispy chilly",
      "salt n pepper spl.. Mushroom",
      "dragon paneer",
      "veg coupsey",
      "veg fried rice",
      "mushroom paneer fried rice",
      "paneer fried rice",
      "mushroom fried rice",
      "Padosan spl fried rice",
      "Padosan spl. Veg steam momo",
      "veg fried momo",
    ],
    prices: [
      145, 160, 145, 171, 180, 200, 220, 190, 150, 180, 210, 220, 200, 210, 140,
      170, 180, 150, 170, 200, 210, 200, 220, 210, 160, 145, 170, 155, 170, 190,
      145, 130,
    ],
  },

  {
    category: "CHILLIES AND MORE NON VEG",
    items: [
      "chicken chilly",
      "chicken chilly gravy",
      "chicken chilly BL",
      "sweet garlic chicken chilly",
      "red chilly chicken",
      "chicken chilly BL gravy",
      "chicken manchurian BL",
      "mutton chilly",
      "chicken salt and pepper",
      "Padosan spl. Chicken manchurian (bone)",
      "Murg Pot Liver Chilly",
      "Murg Mangolian",
      "Murg 65",
      "Egg manchurian",
      "Murg Hot Garlic",
      "Murg steamed momos",
      "murg fried momos",
      "mutton momos",
      "lemon murg momoms",
      "murg fried rice",
      "murg choupsey",
      "chicken egg fried rice",
      "egg fried rice",
      "murg lollipop",
      "Murg Pot Liver dry fry",
    ],
    prices: [
      195, 204, 240, 250, 260, 260, 281, 260, 265, 275, 260, 270, 270, 150, 160,
      220, 210, 240, 220, 170, 190, 175, 140, 190, 240,
    ],
  },

  {
    category: "INDIAN RICE",
    items: [
      "Steamed rice (full)",
      "Steamed rice (half)",
      "Jeera rice",
      "Veg pulao",
      "Kashmiri pulao",
      "Navratan pulao",
      "Lemon Rice",
      "Peas pulao",
      "Paneer Pulao",
      "Korean Lemon Rice",
      "Curd Rice",
    ],
    prices: [81, 46, 99, 150, 180, 185, 110, 160, 175, 150, 190],
  },

  {
    category: "DAL",
    items: [
      "Padosan Spl. Dal tadka with butter",
      "Dal tadka",
      "Lahsuni dal",
      "dal fry",
      "palak Dal",
      "dal makhni",
      "punjabi dal tadka",
      "dal egg tadka",
    ],
    prices: [150, 110, 120, 111, 150, 171, 171, 180],
  },

  {
    category: "Biryani",
    items: [
      "Veg biryani",
      "Paneer biryani",
      "veg dum biryani",
      "Murg Biryani",
      "Mutton Biryani",
      "Egg biryani",
      "Murg dum biryani",
      "Mutton dum biryani",
      "Bindass mutton biryani",
      "Hyderabadi biryani(veg)",
      "Hyderabadi biryani(non veg)",
    ],
    prices: [162, 180, 180, 230, 240, 180, 260, 280, 280, 200, 300],
  },
  {
    category: "INDIAN VEGETABLES (SABJI)",
    items: [
      "veg karahi",
      "veg keema(well cooked mixed vegetable)",
      "veg garden (mix veg chef style)",
      "veg jaipuri (rajasthani style)",
      "veg kashmiri (mix veg cooked in kashmiri style)",
      "veg taj(mix veg chef style)",
      "veg kofta(INDIAN TASTE IN YELLOW CURRY)",
      "veg navaratan korma(veg cooked in white curry with fruits)",
      "veg singapori(Indian twist in Sinagpori veg)",
      "veg shahi korma(cooked in white curry with fruits)",
      "veg padosan spl.(chef's special veg)",
      "veg jhaldar(spicy mix veg)",
      "veg korma(cooked in white curry)",
      "veg do pyaaza",
      "veg nargisi kofta(rich stuffed koftas)",
      "gobhi matar(semi curry)",
      "aloo dum(baby potatoes cooked in famous dum style)",
      "kashmiri aloo dum(stuffed potatoes in mild red curry)",
      "aloo do pyaaza",
      "aloo dum masala(cooked in onion curry)",
      "bhojpuri aloo dum",
      "mix veg (f)",
      "mix veg (h)",
      "green peas masala(homestyle)",
      "mushroom butter masala(cooked in smooth makhni curry)",
      "mushroom masala",
      "mushroom do pyaaza(cooked in onion curry)",
      "malai kofta(paneer kofta cooked in curry)",
      "veg chatpata(f) (chef special)",
      "veg chatpata(h)(chef special)",
      "aloo gobhi bhujia",
      "aloo bhujia",
      "aloo gobhi sabji",
      "palak kofta (H)",
      "palak kofta (F)",
      "palak cream",
      "chana masala",
      "palak corn",
      "veg. lababdar",
      "banarsi kofta",
      "veg amritsari kofta",
      "veg deewani handi",
      "aloo jeera",
    ],
    prices: [
      180, 160, 210, 190, 250, 180, 190, 160, 180, 190, 270, 160, 180, 160, 210,
      160, 130, 180, 130, 160, 160, 160, 100, 150, 240, 230, 240, 210, 170, 110,
      140, 120, 150, 210, 150, 160, 140, 200, 180, 180, 190, 190, 140,
    ],
  },
  {
    category: "PANEER",
    items: [
      "Paneer rasbhari moti",
      "Paneer karahi",
      "Paneer Punjabi(spl. Cooked in lahori style)",
      "Paneer muglai(spl. Traditional style)",
      "Paneer nargisi kofta",
      "Paneer mushroom taj",
      "Paneer kashmiri",
      "Shahi Paneer",
      "Paneer kofta",
      "paneer pasanda",
      "Paneer Capsium",
      "Paneer butter masala",
      "Paneer do pyaaza",
      "Paneer masala",
      "Paneer chatpata",
      "paneer keema",
      "Paneer Jhaldar",
      "Matar Paneer",
      "Palak Paneer",
      "Paneer babycorn",
      "Paneer mushroom masala",
      "Paneer kaju curry",
      "paneer lababdar",
      "paneer tikka lababdar",
      "Paneer corn masala",
      "Paneer Bhujia",
      "Paneer makhani",
      "Paneer Sona-Shahi",
      "Paneer tikka buttermasala",
    ],
    prices: [
      150, 200, 230, 180, 220, 220, 210, 210, 190, 200, 140, 180, 180, 170, 200,
      200, 190, 150, 180, 200, 210, 230, 200, 260, 180, 170, 200, 200, 260,
    ],
  },

  {
    category: "INDIAN EGG",
    items: [
      "omlete(2 egg)",
      "Cheese omlete",
      "boiled egg",
      "fry pounch(1)",
      "egg bhujai(2 eggs)",
      "egg curry(2 eggs)",
      "omlete curry(2 eggs)",
      "Padosan spl. Egg masala",
      "Egg do pyaaza",
      "Egg butter masala",
      "egg chilly",
    ],
    prices: [65, 110, 55, 70, 70, 120, 140, 140, 120, 150, 160],
  },

  {
    category: "JALPRIYA",
    items: [
      "machhi fry",
      "machhi sarso tomato",
      "machhi dry fry",
      "machhi curry",
      "machhi butter masala",
      "machhi masala",
    ],
    prices: [105, 160, 165, 160, 180, 170],
  },

  {
    category: "MUTTON BAHAR",
    items: [
      "Padosan Spl. Mutton",
      "mutton rogan josh",
      "mutton chatpata",
      "mutton keema",
      "mutton dry fry",
      "hariyali mutton",
      "mutton butter masala",
      "mutton masala",
      "mutton do pyaaza",
      "mutton curry",
      "mutton egg kadhai",
      "mutton keema kadhai",
      "mutton kassa",
      "mutton kalia kundan",
    ],
    prices: [
      280, 270, 260, 260, 265, 265, 270, 265, 260, 250, 270, 280, 280, 280,
    ],
  },

  {
    category: "MURG",
    items: [
      { name: "Padosan spl. Murg", prices: [470, 270] },
      { name: "Murg Massalam", prices: [500, 300] },
      { name: "Murg handi", prices: [480, 280] },
      { name: "Murg karhai", prices: [480, 290] },
      { name: "Murg Patiyala", prices: [480, 290] },
      { name: "murg kassa", prices: [490, 290] },
      { name: "murg dehati", prices: [540, 300] },
      { name: "murg jharkhand deshi", prices: [500, 320] },
      { name: "Matki murg", prices: [480, 260] },
      { name: "Murg madhuri", prices: [450, 270] },
      { name: "Murg dry fry", prices: [380, 220] },
      { name: "Murg gravy", prices: [90] },
      { name: "Murg tikka butter masala(8pcs)", prices: [340] },
      { name: "Murg keema", prices: [230] },
      { name: "Murg bharta", prices: [250] },
      { name: "Murg butter masala with bone", prices: [210] },
      { name: "murg jaldhar(2 pc )", prices: [240] },
      { name: "murg masala(2pc )", prices: [200] },
      { name: "murg curry (2 pc.)", prices: [180] },
      { name: "murg do pyaaza", prices: [190] },
      { name: "murg haryali(4 pc.)", prices: [350] },
    ],
  },

  {
    category: "ROTI",
    items: [
      "roti",
      "ajwain roti",
      "missi roti",
      "butter roti",
      "naan",
      "ajwain naan",
      "butter naan",
      "kashmiri naan",
      "shahi naan",
      "stuffed naan",
      "masala naan",
      "garlic naan",
      "paneer naan",
      "Padosan spl. Lachha naan",
      "Plain kulcha",
      "masala kulcha",
      "Paneer kulcha",
      "stuffed kulcha",
      "green peas lachha kulcha",
      "aloo paratha",
      "butter paratha",
      "lachha paratha",
      "Padosan spl. Butter lachha paratha",
    ],
    prices: [
      20, 30, 50, 25, 45, 60, 60, 100, 100, 80, 70, 70, 80, 60, 40, 65, 60, 70,
      70, 60, 50, 60, 70,
    ],
  },

  {
    category: "ROTI (NON VEG)",
    items: ["Murg paratha", "murg keema NAAN", "mutton lahsuni naan"],
    prices: [110, 125, 140],
  },

  {
    category: "TANDOOR(VEG)",
    items: [
      "Veg seek kabab",
      "paneer tikka",
      "Padosan spl. Paneer pudina tikka",
      "Padosan spl. Hara bhara kabab",
      "Paneer achari tikka",
      "Paneer kali mirch tikka",
      "Paneer pahadi kabab",
      "paneer pahadi tikka",
      "veg plater",
      "veg sizzler",
      "paneer sizzler",
    ],
    prices: [180, 230, 240, 200, 240, 240, 230, 250, 560, 280, 280],
  },

  {
    category: "TANDOOR(Non-Veg)",
    items: [
      "tandoori murg (full)",
      "tandoori murg (half)",
      "Padosan Spl. Murg tikka (8 pcs.)",
      "Murg seek kabab",
      "Murg boti kabab",
      "murg leg kabab",
      "murg malai kabab",
      "murg lehsuni tikka",
      "murg reshmi kabab",
      "murg pahadi tikka",
      "murg haryali kabab",
      "murg pesawari kabab",
      "murg kathi kabab",
      "murg jhanjhari kabab",
      "murg achari tikka",
      "murg kali mirch tikka",
      "murg karela kabab",
      "murg pahadi kabab",
      "murg chopped kabab",
      "murg cheese kabab",
      "murg nurani kabab",
      "murg hasina kabab",
      "murg leg stock",
      "murg sizzler",
      "murg banarsi kabab",
      "murg leg haryali kabab",
      "murg banzara kabab",
      "murg karela kabab",
    ],
    prices: [
      380, 210, 260, 310, 350, 250, 320, 300, 350, 380, 280, 370, 240, 310, 370,
      270, 320, 290, 230, 480, 330, 380, 380, 320, 280, 280, 280, 360,
    ],
  },

  // Add other categories similarly
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

  const openWhatsApp = () => {
    const message = cart
      .map((item) => `${item.item} - Rs ${item.price}`)
      .join("\n");
    const totalPrice = calculateTotal();
    const formattedMessage = `${message}\n\nTotal Price: Rs ${totalPrice}`;

    const whatsappNumber = "+919938493610";
    const whatsappUrl = `https://wa.me/${whatsappNumber}/?text=${encodeURIComponent(
      formattedMessage
    )}&source=`;

    window.open(whatsappUrl, "_blank");
  };

  const handleAddToCartWithPrice = (item, price) => {
    handleAddToCart(item, price);
  };

  return (
    <>
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
                    <span>
                      {typeof item === "string" ? (
                        `${item} - Rs ${categoryData.prices[index]}`
                      ) : (
                        <>
                          {item.name} - Rs {item.prices[0]}
                          {item.prices.length === 2 && (
                            <> / Rs {item.prices[1]}</>
                          )}
                        </>
                      )}
                    </span>
                    {typeof item === "string" ? (
                      <button
                        onClick={() =>
                          handleAddToCart(item, categoryData.prices[index])
                        }
                        className="add-to-cart"
                      >
                        Add
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            handleAddToCartWithPrice(item.name, item.prices[0])
                          }
                          className="add-to-cart"
                        >
                          Add
                        </button>
                        {item.prices.length === 2 && (
                          <button
                            onClick={() =>
                              handleAddToCartWithPrice(
                                item.name,
                                item.prices[1]
                              )
                            }
                            className="add-to-cart"
                          >
                            Add
                          </button>
                        )}
                      </>
                    )}
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
          <p>Total Price: {calculateTotal()}</p>
          <button className="place-order" onClick={openWhatsApp}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
