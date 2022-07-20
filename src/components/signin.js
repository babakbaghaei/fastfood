import Input from "./input";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import axios from "axios";

class SignIn extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };
  submit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://reqres.in/api/login",
      this.state.account
    );
    console.log(response);
    localStorage.setItem("token", response.data.token);
  };

  handleChange = (event) => {
    const target = event.currentTarget;
    const account = { ...this.state.account };
    account[target.name] = target.value;
    this.setState({ account });
  };

  render() {
    return (
      <>
        <div className="centerize">
          {" "}
          <div className="container">
            <form onSubmit={this.submit} className="form-container">
              <h3 className="brand-colored brand-colored">
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={faArrowRightToBracket}
                />
                Sign In
              </h3>
              <Input
                onChange={this.handleChange}
                placeholders="Email"
                value={this.state.account.email}
                name="email"
                id="email"
                icon={faUser}
              />
              <Input
                onChange={this.handleChange}
                placeholders="Password"
                value={this.state.account.password}
                name="password"
                id="password"
                icon={faKey}
              />
              <button className="submit-btn buttons">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default SignIn;
