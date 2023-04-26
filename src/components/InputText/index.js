import "./InputText.css";

const InputText = (props) => {
  const placeholderMod = `${props.placeholder}...`;

  const onType = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onType}
        required={props.required}
        placeholder={placeholderMod}
      ></input>
    </div>
  );
};

export default InputText;
