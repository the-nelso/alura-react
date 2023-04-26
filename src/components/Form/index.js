import "./Form.css";
import InputText from "../InputText";
import Droplist from "../Droplist";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [img, setImage] = useState("");
  const [gun, setGun] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onCreatePlayer({
      name,
      tag,
      img,
      gun
    }
    )
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha seus Dados para criar seu Card de Warzone</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(value) => setName(value)}
        ></InputText>
        <InputText
          required={true}
          label="Tag de Jogador"
          placeholder="Digite sua Tag"
          value={tag}
          onChange={(value) => setTag(value)}
        ></InputText>
        <InputText
          label="Imagem"
          placeholder="Digite o endereço de sua imagem"
          value={img}
          onChange={(value) => setImage(value)}
        ></InputText>
        <Droplist
          required={true}
          label="Arma"
          itens={props.playerbase}
          value={gun}
          onChange={(value) => setGun(value)}
        ></Droplist>
        <Button>Criar Texto</Button>
      </form>
    </section>
  );
};
export default Form;
