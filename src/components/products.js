import React from "react";
import Product from "./product";
import { useContext } from "react";
import ProductContext from "./../context/product";

const Products = ({}) => {
  const productContext = useContext(ProductContext);

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
};

export default Products;
