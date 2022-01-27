const FilterHouse = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "house",
      value: ev.target.value,
    });
  };
  return (
    <fieldset className="filterHouse">
      <label className="filterHouse__label" htmlFor="house">
        Casa:
      </label>
      <select
        className="filterHouse__select"
        name="house"
        id="house"
        onChange={handleChange}
        value={props.filterHouse}
      >
        <option className="filterHouse__select--option" value="Gryffindor">
          Gryffindor
        </option>
        <option className="filterHouse__select--option" value="Slytherin">
          Slytherin
        </option>
        <option className="filterHouse__select--option" value="Ravenclaw">
          Ravenclaw
        </option>
        <option className="filterHouse__select--option" value="Hufflepuff">
          Hufflepuff{" "}
        </option>
      </select>
    </fieldset>
  );
};
export default FilterHouse;
