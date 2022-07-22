import "../styles/style.global.css";
import { useContext } from "react";
import ProductContext from "./../context/product";

const Product = ({
  productName,
  stock,
  count,
  id,
  productSort,
  productDescribtion,
  price,
}) => {
  const productContext = useContext(ProductContext);

  return (
    <>
      <div className="product">
        <div className="productInfo">
          <a
            onClick={() => productContext.onFilter(productName)}
            href="#a"
            className="productSort"
          >
            {productName}
          </a>
          <h3 className="productTitle">{productSort}</h3>
          <p>{productDescribtion}</p>
          <p>
            <strong>{price}</strong>$ / each
          </p>
          {handleAvailableToShowBagList()}
        </div>
        <div className="flex-buttons">
          {handleAvailableToAdd()}
          {handleAvailableToDelete()}
          {handleAvailableToDecrease()}
        </div>
      </div>
    </>
  );

  function addAndCalculate() {
    productContext.onAddToBag(id);
    productContext.onCalculatePrice(id);
  }

  function decreaseAndCalculate() {
    productContext.onDecrease(id);
    productContext.onDecreasePrice(id);
  }
  function removeAndCalculate() {
    productContext.onDelete(id);
  }

  function handleAvailableToAdd() {
    if (stock > 0 && stock > count) {
      return (
        <button className={"ad-btn"} onClick={addAndCalculate.bind()}>
          + <strong>Add to card</strong>
        </button>
      );
    } else {
      return <button className={"ad-btn-with-no-work"}>OUT OF STOCK</button>;
    }
  }

  function handleAvailableToDelete() {
    if (count > 0) {
      return (
        <button onClick={removeAndCalculate.bind()} className="dl-btn">
          🗑
        </button>
      );
    } else {
      return null;
    }
  }

  function handleAvailableToDecrease() {
    if (count > 1) {
      return (
        <button onClick={decreaseAndCalculate.bind()} className="less-btn">
          - Less
        </button>
      );
    } else {
      return null;
    }
  }

  function handleAvailableToShowBagList() {
    if (stock > 0 && count > 0) {
      return (
        <h5 className="productdescription">
          <input
            name={count}
            className="countinput"
            type="number"
            value={count}
            onChange={(e) => productContext.onCountChange(e, id)}
          />
        </h5>
      );
    } else {
      return null;
    }
  }
};

export default Product;
