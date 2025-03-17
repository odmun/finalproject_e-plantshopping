/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import Logo from "./assets/Logo.png";
import Callistemon from "./assets/Callistemon_x_hybrid.jpg";
import Daniella from "./assets/Dianella_caerulea.jpg";
import Liriope from "./assets/Liriope_muscari.jpg";

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
  const [addedToCart, setAddedToCart] = useState({}); // To track which products are added to cart
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Urban Plants",
      plants: [
        {
          name: "Callistemon x hybrid",
          image: Callistemon,
          description:
            "A rose is either a woody perennial floweThe new variety of Callistemon x hybrid Red Rocket has an extremely compact and tall growth habit, with large, deep reddish leaves at the beginning of the annual budding. A versatile plant, easy to adapt, tolerant to drought and extreme humidity.ring plant of the genus Rosa in the family Rosaceae or the flower it bears.",
          cost: "$25",
        },
        {
          name: "Daniella caerulea",
          image: Daniella,
          description:
            "Sturdy, compact, very low maintenance. Dianella caerulea Little Jess, with its bright green colouring, withstands both drought conditions and cooler, wetter areas.",
          cost: "$35",
        },
        {
          name: "Liriope muscari",
          image: Liriope,
          description:
            "A herbaceous perennial with a dense, compact growth and small pink flowers in summer. Liriope muscari Isabella is a good alternative for covering large areas with little maintenance. Adapted to any peninsular area and in any soil.",
          cost: "$10",
        },
      ],
    },
    {
      category: "Urban Trees",
      plants: [
        {
          name: "Acer pseudoplatanus",
          image:
            "https://www.urbidermis.com/recursos/imagenes_galeria/01-20220509-Spain-Barcelona-Belloch-ACE-Equipo-Urbidermis-05-CARRUSEL-x1000.jpg",
          description: "Tree native to humid and cool areas. The genus Acer has been reported to cause allergies, although the available data indicate that its allergenicity and/or incidence in the population is low.",
          cost: "$180",
        },
        {
          name: "Aesculus hippocastanum",
          image:
            "https://www.urbidermis.com/recursos/imagenes_galeria/01-20220511-Spain-Barcelona-Belloch-AEH-Equipo-Urbidermis-07-CARRUSEL-x1000.jpg",
          description: "Large, majestic and imposing tree with interesting flowering. Fruit very similar to the chestnut. Requires a certain humidity and good drainage to avoid premature leaf loss.",
          cost: "$153",
        },
        {
          name: "Gleditsia triacanthos",
          image:
            "https://www.urbidermis.com/recursos/imagenes_galeria/01-20211109-Spain-Barcelona-Belloch-GSK-Borja-Ballbe-00-CARRUSEL-x1000.jpg",
          description: "Tree that grows in all types of soil, also in calcareous and dry soils. Variety with a more regular growth habit than the species. Drought tolerant and resistant to heat, frost, salinity and proximity to the sea. Recommended for use in streets and avenues as the tree does not grow wider than about 8m.",
          cost: "$235",
        },
      ],
    },
    {
      category: "Others Materials",
      plants: [
        {
          name: "Urban Garden Substrate",
          image:
            "https://todotierra.es/wp-content/uploads/2022/06/Sustrato-para-arboles-big-baag.jpg",
          description: "Substrate for tree and shrub planting, composed of composted organic vegetable matter and a part of natural screened saul.",
          cost: "$37",
        },
        {
          name: "Compost vegetal Pure",
          image:
            "https://todotierra.es/wp-content/uploads/2022/06/Compost-vegetal-mantillo.jpg",
          description: "Specially designed to improve and enrich the physical structure of the soil, recommended for use in gardens, flowerbeds, planters and crops (orchards).",
          cost: "$40",
        },
      ],
    },
  ];

  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <div className="luxury">
            <img src={Logo} alt="" />
            <a
              href="/shoppingreact/paradise-nursery-shopping-cart-app/"
              style={{ textDecoration: "none" }}
            >
              <div>
                <h3 style={{ color: "white" }}>Urban Plants/Trees Shop</h3>
                <i style={{ color: "white" }}>Together, we believe stronger</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            {" "}
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
              Plants and Trees
            </a>
          </div>
          <div>
            {" "}
            <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    id="mainIconPathAttribute"
                  ></path>
                  <text
                    x="90"
                    y="155"
                    fontFamily="Verdana"
                    fontSize="90"
                    fill="white"
                  >
                    {cart.numOfItems}
                  </text>
                </svg>
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        <div>
          {plantsArray.map((section, sectionIndex) => (
            <div className="product-grid" key={sectionIndex}>
              <h2 className="plant_heading">{section.category}</h2>
              <div className="product-list">
                {section.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <h3 className="product-title">{plant.name}</h3>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <p className="product-price">{plant.cost}</p>
                    <p>{plant.description}</p>
                    {cart.items.some((item) => item.name === plant.name) ? (
                      <button className="product-button added-to-cart">
                        Added to Cart
                      </button>
                    ) : (
                      <button
                        className="product-button"
                        onClick={() => handleAddToCart(plant)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
