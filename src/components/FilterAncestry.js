const FilterAncestry = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "ancestry",
      value: ev.target.value,
    });
  };
  return (
    <fieldset>
      <label htmlFor="ancestry">Ascendencia:</label>
      <select
        name="ancestry"
        id="ancestry"
        onChange={handleChange}
        value={props.filterAncestry}
      >
        <option value="">Cualquiera </option>
        <option value="pure-blood">Sangre pura</option>
        <option value="half-blood">Mestizo/a</option>
        <option value="muggleborn">Padres muggle</option>
      </select>
    </fieldset>
  );
};
export default FilterAncestry;
