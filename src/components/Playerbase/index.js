import "./Playerbase.css";

const Playerbase = (props) => {
  const cssP = { backgroundColor: props.secondaryColor };
    const cssS = {borderColor: props.primaryColor};

  return (
    <section className="playerbase" style={cssP}>
      <h3 style={cssS}>{props.name}</h3>
    </section>
  );
};
export default Playerbase;
