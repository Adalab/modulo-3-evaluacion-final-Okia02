import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";
import FilterAncestry from "./FilterAncestry";
import ResetBtn from "./ResetBtn";
const Filters = (props) => {
  return (
    <section className="search-section">
      <h2 className="search-section__title">Buscar por...</h2>
      <form className="search-section__form" onSubmit={props.handleSubmit}>
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
        <ResetBtn resetInputs={props.resetInputs} />
      </form>
    </section>
  );
};
export default Filters;
