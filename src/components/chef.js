const Chef = ({ chefFName, chefLName, chefAvatar, chefEmail }) => {
  return (
    <>
      <div className="chef-container flex">
        <img className="avatar" src={chefAvatar} alt="" />
        <div className="flex-colomn">
          <div className="chef-name">
            <h4>{chefFName}</h4>
            <h4>{chefLName}</h4>
          </div>
          <p>{chefEmail}</p>
        </div>
      </div>
    </>
  );
};

export default Chef;
