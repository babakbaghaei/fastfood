import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ id, icon, name }) => {
  return (
    <>
      <div className="input-c">
        <input className="input" placeholder={name} id={id} type={id}></input>
        <FontAwesomeIcon className="input-icon sag" icon={icon} />
      </div>
    </>
  );
};

export default Input;
