import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import FilterAncestry from "./FilterAncestry";
import ResetBtn from "./ResetBtn";

const Filters = (props) => {
  return (
    <section>
    <h2>Buscar por...</h2>
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
      <ResetBtn resetInputs={props.resetInputs} />
    </section>
  );
};
export default Filters;
