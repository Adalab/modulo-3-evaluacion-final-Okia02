import "../styles/App.scss";
const ResetBtn = (props) => {
  const handleResetBtn = (e) => {
    props.resetInputs();
  };
  return (
    <button className="search-section__reset-btn" onClick={handleResetBtn}>
      Reset
    </button>
  );
};
export default ResetBtn;
