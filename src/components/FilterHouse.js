const FilterHouse = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor="house">Selecciona la casa:</label>
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
    </>
  );
};
export default FilterHouse;
