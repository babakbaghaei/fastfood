import Input from "./input";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//

const SignIn = () => {
  const [account, setAccount] = useState({});
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    const response = await axios.post("https://reqres.in/api/login", account);
    console.log(response);
    localStorage.setItem("token", response.data.token);
    navigate("/chefs");
    window.location.reload();
  }

  function handleChange(event) {
    const target = event.currentTarget;
    const newAccount = { ...account };
    newAccount[target.name] = target.value;
    setAccount(newAccount);
  }

  return (
    <>
      <div className="centerize">
        <div className="container">
          <form onSubmit={submit} className="form-container">
            <h3>
              <FontAwesomeIcon
                className="brand-colored"
                style={{ marginRight: "10px" }}
                icon={faArrowRightToBracket}
              />
              Sign In
            </h3>
            <Input
              onChange={handleChange}
              placeholders="Email"
              value={account.email}
              name="email"
              id="email"
              icon={faUser}
            />
            <Input
              onChange={handleChange}
              placeholders="Password"
              value={account.password}
              name="password"
              id="password"
              icon={faKey}
            />
            <button className="submit-btn buttons">Submit</button>
            <p style={{ textAlign: "center" }}>
              login with <b>eve.holt@reqres.in</b> and any password.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

//

export default SignIn;
