import pizzaHeaderImage from "./../images/pizza.png";

const Home = () => {
  return (
    <>
      <div className="centerize relative">
        <img className="pizza-header-image" src={pizzaHeaderImage} alt="" />
        <div className="header-desc">
          <h1>FastFood</h1>
          <p>best one that you can get</p>
        </div>
      </div>
    </>
  );
};

export default Home;
