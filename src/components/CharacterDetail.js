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
        <li className='detail__info--element'>
          Ascendencia: Sangre pura <FontAwesomeIcon className='icon' icon={faHatWizard} />
        </li>
      );
    } else if (props.wizard.ancestry === "half-blood") {
      return (
        <li className='detail__info--element'>
          Ascendencia: Mestizaje <FontAwesomeIcon className='icon' icon={faStarHalfAlt} />
        </li>
      );
    } else if (props.wizard.ancestry === "muggleborn") {
      return (
        <li className='detail__info--element'>
          Ascendencia: Padres muggle <FontAwesomeIcon className='icon' icon={faGlobeAmericas} />
        </li>
      );
    } else if (props.wizard.ancestry === "") {
      return "";
    }
  };
  const getSpecies = () => {
    return props.wizard.species === "human" ? (
      <li className='detail__info--element'>
        Especie: Ser humano <FontAwesomeIcon className='icon' icon={faUserAlt} />
      </li>
    ) : (
      notHuman()
    );
  };
  const notHuman = () => {
    if (props.wizard.species === "half-giant") {
      return (
        <li className='detail__info--element'>
          Especie: Semi-gigante <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "werewolf") {
      return (
        <li className='detail__info--element'>
          Especie: Hombre-lobo <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "cat") {
      return (
        <li className='detail__info--element'>
          Especie: Felino <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "goblin") {
      return (
        <li className='detail__info--element'>
          Especie: Duende <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "owl") {
      return (
        <li className='detail__info--element'>
          Especie: Lechuza <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "ghost") {
      return (
        <li className='detail__info--element'>
          Especie: Fantasma <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "poltergeist") {
      return (
        <li className='detail__info--element'>
          Especie: poltergeist <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "three-headed dog") {
      return (
        <li className='detail__info--element'>
          Especie: Cancerbero <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "dragon") {
      return (
        <li className='detail__info--element'>
          Especie: Dragón <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "centaur") {
      return (
        <li className='detail__info--element'>
          Especie: Centauro <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "house-elf") {
      return (
        <li className='detail__info--element'>
          Especie: Elfo doméstico <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "acromantula") {
      return (
        <li className='detail__info--element'>
          Especie: Acromántula <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "hippogriff") {
      return (
        <li className='detail__info--element'>
          Especie: Hipogrifo <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "giant") {
      return (
        <li className='detail__info--element'>
          Especie: Gigante <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "vampire") {
      return (
        <li className='detail__info--element'>
          Especie: Vampiro <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    } else if (props.wizard.species === "half-human") {
      return (
        <li className='detail__info--element'>
          Especie: Semiveela <FontAwesomeIcon className='icon' icon={faUserAltSlash} />
        </li>
      );
    }
  };

  const getStatus = () => {
    if (props.wizard.status && props.wizard.gender === "female") {
      return (
        <li className='detail__info--element'>
          Estatus: Viva <FontAwesomeIcon className='icon' icon={faHeartbeat} />
        </li>
      );
    } else if (!props.wizard.status && props.wizard.gender === "female") {
      return (
        <li className='detail__info--element'>
          Estatus: Muerta <FontAwesomeIcon className='icon' icon={faSkull} />
        </li>
      );
    } else if (props.wizard.status && props.wizard.gender === "male") {
      return (
        <li className='detail__info--element'>
          Estatus: Vivo <FontAwesomeIcon className='icon' icon={faHeartbeat} />
        </li>
      );
    } else if (!props.wizard.status && props.wizard.gender === "male") {
      return (
        <li className='detail__info--element'>
          Estatus: Muerto <FontAwesomeIcon className='icon' icon={faSkull} />
        </li>
      );
    }
  };

  const getHouse = () => {
    if (props.wizard.house === "Gryffindor") {
      return (
        <li className='detail__info--element'>
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
        <li className='detail__info--element'>
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
        <li className='detail__info--element'>
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
        <li className='detail__info--element'>
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
      return <li className='detail__info--element'>Sobrenombre: {props.wizard.otherName[0]}</li>;
    }
  };
  const getGender = () => {
    return props.wizard.gender === "female" ? (
      <li className='detail__info--element'>
        Género: <FontAwesomeIcon className='icon' icon={faVenus} />
      </li>
    ) : (
      <li className='detail__info--element'>
        Género: <FontAwesomeIcon className='icon' icon={faMars} />
      </li>
    );
  };

  return (
    <article className="detail">
      <Link className="detail__link" to="/">
        <FontAwesomeIcon className='detail__link--icon'  icon={faChevronLeft} /> Volver
      </Link>
      <img
        className="detail__img"
        src={
          props.wizard.image ||
          "https://data.whicdn.com/images/296298377/original.png"
        }
        alt={`Foto de ${props.wizard.name}`}
        title={`Foto de ${props.wizard.name}`}
      />
      <h3 className="detail__title">{props.wizard.name}</h3>
      <ul className="detail__info">
        {getOtherNames()}
        {getStatus()}
        {getSpecies()}
        {getGender()}
        {getHouse()}
        {getAncestry()}
      </ul>
    </article>
  );
};
export default CharacterDetail;
