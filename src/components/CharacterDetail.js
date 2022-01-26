import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { faVenus } from "@fortawesome/free-solid-svg-icons";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import { faUserAltSlash } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const CharacterDetail = (props) => {
  const getAncestry = () => {
    if (props.wizard.ancestry === "pure-blood") {
      return (
        <li>
          Ascendencia: Sangre pura <FontAwesomeIcon icon={faHatWizard} />
        </li>
      );
    } else if (props.wizard.ancestry === "half-blood") {
      return (
        <li>
          Ascendencia: Mestizaje <FontAwesomeIcon icon={faStarHalfAlt} />
        </li>
      );
    } else if (props.wizard.ancestry === "muggleborn") {
      return (
        <li>
          Ascendencia: Padres muggle <FontAwesomeIcon icon={faGlobeAmericas} />
        </li>
      );
    } else if (props.wizard.ancestry === "") {
      return "";
    }
  };
  const getSpecies = () => {
    return props.wizard.species === "human" ? (
      <li>
        Especie: Ser humano <FontAwesomeIcon icon={faUserAlt} />
      </li>
    ) : (
      notHuman()
    );
  };
  const notHuman = () => {
    if (props.wizard.species === "half-giant") {
      return (
        <li>
          Especie: Semi-gigante <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "werewolf") {
      return (
        <li>
          Especie: Hombre-lobo <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "cat") {
      return (
        <li>
          Especie: Felino <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "goblin") {
      return (
        <li>
          Especie: Duende <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "owl") {
      return (
        <li>
          Especie: Lechuza <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "ghost") {
      return (
        <li>
          Especie: Fantasma <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "poltergeist") {
      return (
        <li>
          Especie: poltergeist <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "three-headed dog") {
      return (
        <li>
          Especie: Cancerbero <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "dragon") {
      return (
        <li>
          Especie: Dragón <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "centaur") {
      return (
        <li>
          Especie: Centauro <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "house-elf") {
      return (
        <li>
          Especie: Elfo doméstico <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "acromantula") {
      return (
        <li>
          Especie: Acromántula <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "hippogriff") {
      return (
        <li>
          Especie: Hipogrifo <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "giant") {
      return (
        <li>
          Especie: Gigante <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "vampire") {
      return (
        <li>
          Especie: Vampiro <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "half-human") {
      return (
        <li>
          Especie: Semiveela <FontAwesomeIcon icon={faUserAltSlash} />
        </li>
      );
    }
  };

  const getStatus = () => {
    if (props.wizard.status && props.wizard.gender === "female") {
      return (
        <li>
          Estatus: Viva <FontAwesomeIcon icon={faHeartbeat} />
        </li>
      );
    } else if (!props.wizard.status && props.wizard.gender === "female") {
      return (
        <li>
          Estatus: Muerta <FontAwesomeIcon icon={faSkull} />
        </li>
      );
    } else if (props.wizard.status && props.wizard.gender === "male") {
      return (
        <li>
          Estatus: Vivo <FontAwesomeIcon icon={faHeartbeat} />
        </li>
      );
    } else if (!props.wizard.status && props.wizard.gender === "male") {
      return (
        <li>
          Estatus: Muerto <FontAwesomeIcon icon={faSkull} />
        </li>
      );
    }
  };

  const getHouse = () => {
    if (props.wizard.house === "Gryffindor") {
      return (
        <li>
          Casa: Gryffindor
          <img
            className="img_house"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Hogwarts_Gryffindor_colors.svg"
            alt="Colores de Gryffindor"
            title="Colores de Gryffindor"
          />
        </li>
      );
    } else if (props.wizard.house === "Slytherin") {
      return (
        <li>
          Casa: Slytherin
          <img
            className="img_house"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Hogwarts_Slytherin_colors.svg"
            alt="Colores de Slytherin"
            title="Colores de Slytherin"
          />
        </li>
      );
    } else if (props.wizard.house === "Ravenclaw") {
      return (
        <li>
          Casa: Ravenclaw
          <img
            className="img_house"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Hogwarts_Ravenclaw_colors.svg"
            alt="Colores de Ravenclaw"
            title="Colores de Ravenclaw"
          />
        </li>
      );
    } else if (props.wizard.house === "Hufflepuff") {
      return (
        <li>
          Casa: Hufflepuff
          <img
            className="img_house"
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Hogwarts_Hufflepuff_colors.svg"
            alt="Colores de Hufflepuff"
            title="Colores de Hufflepuff"
          />
        </li>
      );
    }
  };
  const getOtherNames = () => {
    if (props.wizard.otherName.length !== 0) {
      return <li>Sobrenombre: {props.wizard.otherName[0]}</li>;
    }
  };
  const getGender = () => {
    return props.wizard.gender === "female" ? (
      <li>
        Género: <FontAwesomeIcon icon={faVenus} />
      </li>
    ) : (
      <li>
        Género: <FontAwesomeIcon icon={faMars} />
      </li>
    );
  };

  return (
    <>
      <Link to="/">
        <FontAwesomeIcon icon={faChevronLeft} /> Volver
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
        {getStatus()}
        {getSpecies()}
        {getGender()}
        {getHouse()}
        {getAncestry()}
      </ul>
    </>
  );
};
export default CharacterDetail;
