import "./Droplist.css";

const Droplist = (props) => {
  return (
    <div className="drop-list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onChange(event.target.value)}
        required={props.required}
        value={props.value}
      >
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Droplist;
