const FilterHouse = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.target.value,
    });
  };
  return (
    <fieldset>
      <label htmlFor="house">Casa:</label>
      <select
        name="house"
        id="house"
        onChange={handleChange}
        value={props.filterHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff </option>
      </select>
    </fieldset>
  );
};
export default FilterHouse;
