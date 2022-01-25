import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const listItems = props.wizards.map((wizard, index) => {
    return (
      <li key={index}>
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
