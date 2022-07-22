import { NavLink, Link } from "react-router-dom";
import image from "./../images/Brand.svg";

const Navbar = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="links flex" style={{ alignItems: "center" }}>
            <Link to="/">
              <img
                className="brand"
                src={image}
                style={{ marginRight: "10px" }}
                alt="brand"
              />
            </Link>
            <NavLink to="/foods">Foods</NavLink>
            {showingAuthedLink()}
            {/* <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/info/contact">Contact Us</NavLink>
            <NavLink to="/info/about">About</NavLink> */}
          </div>
          {handleAuth()}
        </div>
      </div>
    </>
  );
  function handleAuth() {
    if (!token) {
      return (
        <div className="flex">
          <Link to={"/users/signin"}>
            <button className="ad-btn">Sign In</button>
          </Link>
        </div>
      );
    }
    if (token === "QpwL5tke4Pnpja7X4") {
      return (
        <div className="flex">
          <Link to={"/"}>
            <button onClick={handleLogOut} className="ad-btn">
              Log Out
            </button>
          </Link>
        </div>
      );
    }
  }
  function showingAuthedLink() {
    if (token) {
      return <NavLink to="/chefs">Chefs</NavLink>;
    }
  }
  function handleLogOut() {
    localStorage.removeItem("token");
    window.location.reload();
  }
};

export default Navbar;
