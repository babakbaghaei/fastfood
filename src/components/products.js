import React from "react";
import Product from "./product";
import { useContext } from "react";
import ProductContext from "./../context/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const productContext = useContext(ProductContext);
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <>
        <div className="product-container">
          {productContext.products.map((p, index) => (
            <Product
              className="product-c"
              key={index}
              id={p.id}
              productName={p.productName}
              productDescribtion={p.describtion}
              price={p.price}
              productSort={p.sort}
              stock={p.stock}
              count={p.count}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div animationName className="container">
          <FontAwesomeIcon
            style={{ color: "chocolate" }}
            icon={faExclamationTriangle}
          />
          <h3 style={{ margin: "0" }}>You have to login first!</h3>
        </div>
      </>
    );
  }
};

export default Products;
