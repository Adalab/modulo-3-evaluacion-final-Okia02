import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import FilterAncestry from "./FilterAncestry";

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
        <FilterAncestry
          handleFilter={props.handleFilter}
          filterAncestry={props.filterAncestry}
        />
      </form>
    </>
  );
};
export default Filters;
