import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ id, icon, name, value, onChange, placeholders }) => {
  return (
    <>
      <div className="input-c">
        <input
          className="input"
          placeholder={placeholders}
          id={id}
          name={name}
          type={id}
          value={value}
          onChange={onChange}
        ></input>
        <FontAwesomeIcon className="input-icon sag" icon={icon} />
      </div>
    </>
  );
};

export default Input;
