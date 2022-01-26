import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const listItems = props.wizards.map((wizard) => {
    return (
      <li key={wizard.id}>
        <CharacterCard wizard={wizard} />
      </li>
    );
  });
  return (
    <section>
      <ul>{listItems}</ul>
    </section>
  );
};
export default CharacterList;
