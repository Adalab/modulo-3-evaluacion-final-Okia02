const FilterAncestry = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "ancestry",
      value: ev.target.value,
    });
  };
  return (
    <fieldset className="filterAncestry">
      <label className="filterAncestry__label" htmlFor="ancestry">
        Ascendencia:
      </label>
      <select
        className="filterAncestry__select"
        name="ancestry"
        id="ancestry"
        onChange={handleChange}
        value={props.filterAncestry}
      >
        <option className="filterAncestry__select--option" value="">
          Cualquiera
        </option>
        <option className="filterAncestry__select--option" value="pure-blood">
          Sangre pura
        </option>
        <option className="filterAncestry__select--option" value="half-blood">
          Mestizo/a
        </option>
        <option className="filterAncestry__select--option" value="muggleborn">
          Padres muggle
        </option>
      </select>
    </fieldset>
  );
};
export default FilterAncestry;
