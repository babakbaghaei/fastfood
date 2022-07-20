import Input from "./input";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignIn = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  const state = {};
  return (
    <>
      <div className="container">
        <form onSubmit={submit} className="form-container">
          <h3 className="brand-colored brand-colored">
            <FontAwesomeIcon
              style={{ marginRight: "8px" }}
              icon={faArrowRightToBracket}
            />
            Sign In
          </h3>
          <Input name="Email" id="email" icon={faUser} />
          <Input name="Password" id="password" icon={faKey} />
          <button className="submit-btn buttons">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
