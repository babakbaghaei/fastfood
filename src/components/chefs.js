import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chef from "./chef";

const Chefs = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const chefServers = await axios.get("https://reqres.in/api/users?page=2");
      setChefs(chefServers.data.data);
    }
    fetchData();
    if (!token) {
      navigate("/users/signin");
    }
  });

  return (
    <>
      <div className="centerize">
        <div className="chefs-container">
          {chefs.map((chef, index) => {
            return (
              <>
                <Chef
                  key={index}
                  chefFName={chef.first_name}
                  chefLName={chef.last_name}
                  chefEmail={chef.email}
                  chefAvatar={chef.avatar}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Chefs;
