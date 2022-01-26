import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

const Filters = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <FilterName
          handleFilter={props.handleFilter}
          filterName={props.filterName}
        />
        <FilterHouse
          handleFilter={props.handleFilter}
          filterHouse={props.filterHouse}
        />
      </form>
    </>
  );
};
export default Filters;