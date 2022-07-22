import React from "react";
import Product from "./product";
import { useContext } from "react";
import ProductContext from "./../context/product";

const Products = () => {
  let sum = 0;
  const productContext = useContext(ProductContext);
  return (
    <>
      <div className="centerize">
        <h2>Foods</h2>
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
        {handleCalculate()}
      </div>
    </>
  );

  function handleCalculate() {
    productContext.products.forEach((p) => {
      sum += p.count;
    });
    if (sum === 0) {
      return null;
    } else {
      return (
        <>
          <div className="flex sticky space-between m30">
            <p>
              <b>{sum} </b>item is selected
            </p>
            <div>
              <button
                onClick={productContext.onDelete}
                style={{ width: "150px" }}
                className="dl-btn"
              >
                Reset
              </button>
              <button
                style={{ width: "300px", marginLeft: "20px" }}
                className="ad-btn"
              >
                Continue
              </button>
            </div>
          </div>
        </>
      );
    }
  }
};

export default Products;
