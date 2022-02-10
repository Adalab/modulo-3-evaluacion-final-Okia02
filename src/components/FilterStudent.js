const FilterStudent = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "student",
      value: ev.currentTarget.checked,
    });
  };
  return (
    <fieldset className="filterName">
      <label className="filterName__label" htmlFor="student">
        Estudiante:
      </label>
      <input
        className="filterName__input"
        type="checkbox"
        name="student"
        id="student"
        checked={props.filterStudent}
        onChange={handleInput}
      />
    </fieldset>
  );
};

export default FilterStudent;
