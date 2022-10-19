import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import blue1 from "./images/blue1.jpg";
import blue2 from "./images/blue2.jpg";
import blue3 from "./images/blue3.jpg";
import red1 from "./images/red1.jpg";
import red2 from "./images/red2.jpg";
import red3 from "./images/red3.jpg";
import bod1 from "./images/bod1.jpg";
import bod2 from "./images/bod2.jpg";
import bod3 from "./images/bod3.jpg";
import shi1 from "./images/shi1.jpg";
import shi2 from "./images/shi2.jpg";
import shi3 from "./images/shi3.jpg";
import body1 from "./images/body1.jpg";
import body2 from "./images/body2.jpg";
import body3 from "./images/body3.jpg";
import white1 from "./images/white1.jpg";
import white2 from "./images/white2.jpg";
import white3 from "./images/white3.jpg";
import col1 from "./images/col1.jpg";
import col2 from "./images/col2.jpg";
import col3 from "./images/col3.jpg";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";
import Admin from "./pages/Admin";
import Delivery from "./pages/Delivery";
import DevicePage from "./pages/DevicePage";

export const Context = React.createContext();


function App() {

  const [items, setItems] = useState([]);
  const[filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        type: "Skirt",
        brand: "Divided",
        price: 150,
        imgSrc: shi1,
        imgSrc2: shi2,
        imgSrc3: shi3,
      },
      {
        id: 2,
        type: "Dress",
        brand: "Atmosphere",
        price: 250,
        imgSrc: blue1,
        imgSrc2: blue2,
        imgSrc3: blue3,
      },
      {
        id: 3,
        type: "Overalls",
        brand: "Vero Moda",
        price: 300,
        imgSrc: bod1,
        imgSrc2: bod2,
        imgSrc3: bod3,
      },
      {
        id: 4,
        type: "Bodysuit",
        brand: "Zara",
        price: 450,
        imgSrc: body1,
        imgSrc2: body2,
        imgSrc3: body3,
      },
      {
        id: 5,
        type: "Dress",
        brand: "Atmosphere",
        price: 50,
        imgSrc: white1,
        imgSrc2: white2,
        imgSrc3: white3,
      },
      {
        id: 6,
        type: "Golf",
        brand: "Zara",
        price: 600,
        imgSrc: red1,
        imgSrc2: red2,
        imgSrc3: red3,
      },
      {
        id: 7,
        type: "Overalls",
        brand: "BooHoo",
        price: 600,
        imgSrc: col1,
        imgSrc2: col2,
        imgSrc3: col3,
      },
    ]);
  }, []);
  
  return (
    <Context.Provider value={{filteredItems, setFilteredItems, items}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="basket" element={<Basket />} />
          <Route path="admin" element={<Admin />} />
          <Route path="device/:itemId" element={<DevicePage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
