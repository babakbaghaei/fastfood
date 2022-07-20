import { useContext } from "react";
import ProductContext from "./../context/product";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const productContext = useContext(ProductContext);
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="links flex" style={{ alignItems: "center" }}>
            <h2 className="brand-colored" style={{ marginRight: "10px" }}>
              FastFood
            </h2>
            <NavLink to="/FastFood">Home</NavLink>
            <NavLink to="/Foods">Foods</NavLink>
            <NavLink to="/SignIn">Sign In</NavLink>
          </div>
          <div className="flex">
            <h3 className="selected-items">{calculateSum()}</h3>
            <h3 className="items-selected">item is selected.</h3>
          </div>
        </div>
      </div>
    </>
  );
  function calculateSum() {
    let sum = 0;
    productContext.products.forEach((p) => {
      sum += p.count;
    });
    if (sum !== 0) return sum;
    else return "Zero ";
  }
};

export default Navbar;
