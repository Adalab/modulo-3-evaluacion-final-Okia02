import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const getSpecies = () => {
    return props.wizard.species === "human" ? "Ser humano" : notHuman();
  };
  const getAncestry = () => {
    if (props.wizard.ancestry === "pure-blood") {
      return "Sangre pura";
    } else if (props.wizard.ancestry === "half-blood") {
      return "Mestizo/a";
    } else if (props.wizard.ancestry === "muggleborn") {
      return "Padres muggle";
    }
  };
  const notHuman = () => {
    if (props.wizard.species === "half-giant") {
      return "Semi-gigante";
    } else if (props.wizard.species === "werewolf") {
      return "Hombre-lobo";
    } else if (props.wizard.species === "cat") {
      return "Felino";
    } else if (props.wizard.species === "goblin") {
      return "Duende";
    } else if (props.wizard.species === "owl") {
      return "Lechuza";
    } else if (props.wizard.species === "ghost") {
      return "Fantasma";
    } else if (props.wizard.species === "poltergeist") {
      return "Poltergeist";
    } else if (props.wizard.species === "three-headed dog") {
      return "Cancerbero";
    } else if (props.wizard.species === "dragon") {
      return "Dragón";
    } else if (props.wizard.species === "centaur") {
      return "Centauro";
    } else if (props.wizard.species === "house-elf") {
      return "Elfo doméstico";
    } else if (props.wizard.species === "acromantula") {
      return "Acromántula";
    } else if (props.wizard.species === "hippogriff") {
      return "Hipogrifo";
    } else if (props.wizard.species === "giant") {
      return "Gigante";
    } else if (props.wizard.species === "vampire") {
      return "Vampiro";
    } else if (props.wizard.species === "half-human") {
      return "Semiveela";
    }
  };
  return (
    <Link to={`/character/${props.wizard.id}`}>
      <img
        className="img"
        src={
          props.wizard.image ||
          "https://data.whicdn.com/images/296298377/original.png"
        }
        alt={`Foto de ${props.wizard.name}`}
        title={`Foto de ${props.wizard.name}`}
      />
      <h3>{props.wizard.name}</h3>
      <p>
        {getSpecies()} ||{" "}
        {getAncestry.length !== 0 ? getAncestry() : "Sin ascendencia"}
      </p>
    </Link>
  );
};
export default CharacterCard;
