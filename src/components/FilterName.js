const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <fieldset>
      <label htmlFor="name">Personaje:</label>
      <input
        type="search"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleInput}
      />
    </fieldset>
  );
};
export default FilterName;
