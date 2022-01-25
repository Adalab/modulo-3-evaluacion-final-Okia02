const FilterName = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <>
      <label htmlFor="name">Buscar por personaje:</label>
      <input
        type="search"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleInput}
      />
    </>
  );
};
export default FilterName;
