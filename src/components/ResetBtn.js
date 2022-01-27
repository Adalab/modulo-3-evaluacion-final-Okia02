import "../styles/App.scss";
function ResetBtn(props) {
  const handleResetBtn = (e) => {
    props.resetInputs();
  };
  return (
    <button className="search-section__reset-btn" onClick={handleResetBtn}>
      Reset
    </button>
  );
}

export default ResetBtn;
