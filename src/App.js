import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Playerbase from "./components/Playerbase";

function App() {
  const playerbase = [
    {
      nome: "LMG",
      primaryColor: "#F2F3F4",
      secondaryColor: "#100C08",
    },
    {
      nome: "SMG",
      primaryColor: "#F2F3F4",
      secondaryColor: "#010B13",
    },
    {
      nome: "AR",
      primaryColor: "#F2F3F4",
      secondaryColor: "#242124",
    },
    {
      nome: "Sniper",
      primaryColor: "#F2F3F4",
      secondaryColor: "#1B1B1B",
    },
    {
      nome: "Escopeta",
      primaryColor: "#F2F3F4",
      secondaryColor: "#000000",
    },
    {
      nome: "DMR",
      primaryColor: "#F2F3F4",
      secondaryColor: "#FFBA05",
    },
    {
      nome: "Pistola",
      primaryColor: "#FFEEDF",
      secondaryColor: "#FF8A29",
    },
    {
      nome: "Corpo-a-corpo",
      primaryColor: "#FFEEDF",
      secondaryColor: "#FF8A29",
    },
  ];

  const [, setPlayer] = useState([]);

  const onNewPlayer = (player) => {
    console.log(player);
    setPlayer([...player, player]);
  };

  return (
    <div className="App">
      <Banner></Banner>
      <Form playerbase={playerbase.map(playerbase => playerbase.nome)} onCreatePlayer={(player) => onNewPlayer(player)}></Form>

      {playerbase.map((playerbase) => (
        <Playerbase
          key={playerbase.nome}
          name={playerbase.nome}
          primaryColor={playerbase.primaryColor}
          secondaryColor={playerbase.secondaryColor}
        ></Playerbase>
      ))}
    </div>
  );
}

export default App;
