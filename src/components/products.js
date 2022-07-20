import React from "react";
import Product from "./product";
import { useContext } from "react";
import ProductContext from "./../context/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Products = () => {
  const productContext = useContext(ProductContext);
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <>
        <div className="centerize">
          <h2
            className="brand-colored"
            style={{
              textAlign: "left",
              marginTop: "30px",
            }}
          >
            Foods
          </h2>
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
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="centerize">
          <div className="container">
            <FontAwesomeIcon
              style={{ color: "chocolate" }}
              icon={faExclamationTriangle}
            />
            <h3 style={{ margin: "0" }}>Restricted Access!</h3>
            <p>You cannot add any food without signing in.</p>
            <Link to="/SignIn">
              <b>Sign In</b>
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default Products;
