import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const listItems = props.wizards.map((wizard) => {
    return (
      <li key={wizard.id} className="list-section__list--element">
        <CharacterCard wizard={wizard} />
      </li>
    );
  });
  return (
    <section className="list-section">
      <ul className="list-section__list">{listItems}</ul>
    </section>
  );
};
export default CharacterList;
