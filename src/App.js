import Products from "./components/products";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SignIn from "./components/signin";
import React from "react";
import { useState } from "react";
import ProductContext from "./context/product";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [products, setProduct] = useState([
    {
      id: 0,
      productName: "Pizza",
      sort: "🍕 Pepperoni",
      describtion: "Bread, Cheese, Mushroom, Tomato, Pepperoni, Salt, Pepper",
      price: 11.99,
      stock: 7,
      count: 0,
    },
    {
      id: 1,
      productName: "Burger",
      sort: "🍔 Steak & Garlic",
      describtion: "Hamburger, Sauce, Cheese, Mushroom, Steak, Garlic, Pepper",
      price: 6.99,
      stock: 7,
      count: 0,
    },
    {
      id: 2,
      productName: "Chips",
      sort: "🍟 Fries",
      describtion:
        "Chipsy, Crispy, with a special sauce that we've made for a special taste.",
      price: 2.99,
      stock: 3,
      count: 0,
    },
    {
      id: 3,
      productName: "Drink",
      sort: "🥤 Coca Cola",
      describtion: "we bring you the world's most popular drink.",
      price: 0.99,
      stock: 12,
      count: 0,
    },
    {
      id: 4,
      productName: "Drink",
      sort: "🥤 Pepsi Cola",
      describtion: "we bring you the world's most popular drink.",
      price: 0.99,
      stock: 0,
      count: 0,
    },
  ]);
  let [price, setPrice] = useState(0);
  return (
    <>
      <ProductContext.Provider
        value={{
          products: products,
          price: price,
          onAddToBag: handleAddToBag,
          onDelete: handleDelete,
          onDecrease: handleDecrease,
          onCalculatePrice: calculatePrice,
          onDecreasePrice: calculateLessPrice,
          onFilter: filteringBySort,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/Foods" element={<Products />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </ProductContext.Provider>
    </>
  );
  function handleAddToBag(id) {
    console.log(id);
    let newProducts = [...products];
    newProducts[id].count++;
    setProduct(newProducts);
  }
  function handleDecrease(id) {
    let newProducts = [...products];
    newProducts[id].count--;
    setProduct(newProducts);
  }
  function handleDelete(id) {
    let newProducts = [...products];
    newProducts[id].count = 0;
    setProduct(newProducts);
  }
  function calculatePrice(id) {
    let newProducts = [...products];
    setPrice((price += newProducts[id].price));
    setPrice(Math.round(price.toFixed(2)));
  }
  function calculateLessPrice(id) {
    let newProducts = [...products];
    setPrice((price -= newProducts[id].price));
    setPrice(Math.round(price.toFixed(2)));
  }
  function filteringBySort(sort) {
    let newProducts = [...products];
    newProducts = newProducts.filter((p) => p.productName === sort);
    setProduct(newProducts);
  }
};

export default App;
