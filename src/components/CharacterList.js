import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  console.log(props.wizards);
  const listItems = props.wizards.map((wizard) => {
    return (
      <li key={wizard.id}>
        <CharacterCard wizard={wizard} />
      </li>
    );
  });
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
};
export default CharacterList;
