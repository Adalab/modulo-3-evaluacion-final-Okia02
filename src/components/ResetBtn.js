function ResetBtn(props) {
    const handleResetBtn = (e) => {
      props.resetInputs();
    };
    return (
      <button onClick={handleResetBtn}>
        Reset
      </button>
    );
  }  
   
  export default ResetBtn;