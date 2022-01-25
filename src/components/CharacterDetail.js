import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
//import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
//import { faDizzy } from "@fortawesome/free-solid-svg-icons";

const CharacterDetail = (props) => {
  const getSpecies = () => {
    return props.wizard.species === "human" ? "Ser humano" : notHuman();
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

  const getStatus = () => {
    if (props.wizard.status && props.wizard.gender === "female") {
      return (
        <>
          Viva
          {/*<FontAwesomeIcon icon={faHeartbeat} />*/}
        </>
      );
    } else if (!props.wizard.status && props.wizard.gender === "female") {
      return (
        <>
          Muerta
          {/*<FontAwesomeIcon icon={faDizzy} />*/}
        </>
      );
    } else if (props.wizard.status && props.wizard.gender === "male") {
      return (
        <>
          Vivo
          {/*<FontAwesomeIcon icon={faHeartbeat} />*/}
        </>
      );
    } else if (!props.wizard.status && props.wizard.gender === "male") {
      return (
        <>
          Muerto
          {/*<FontAwesomeIcon icon={faDizzy} />*/}
        </>
      );
    }
  };
  const getOtherNames = () => {
    if (props.wizard.otherName.length !== 0) {
      return <li>Sobrenombre: {props.wizard.otherName[0]}</li>;
    }
  };

  return (
    <>
      <Link to="/">
        {/*<FontAwesomeIcon icon={faChevronLeft} />*/}
        Volver
      </Link>
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
      <ul>
        {getOtherNames()}
        <li>Estatus: {getStatus()}</li>
        <li>Especie: {getSpecies()}</li>
        <li>Género: {props.wizard.gender}</li>
        <li>Casa: {props.wizard.house}</li>
      </ul>
    </>
  );
};
export default CharacterDetail;
