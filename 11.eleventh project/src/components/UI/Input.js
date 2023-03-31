const Input = ({control,label,errorMessage,type,id}) => {


  return (
    <div className={`form-control ${control.hasError ? "invalid" : ""}`}>
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        id={id}
        value={control.value}
        onChange={control.valueChangeHandler}
        onBlur={control.inputBlurHandler}
      />
      {control.hasError && <p className="error-text">{errorMessage}</p>}
    </div>
  );
};

export default Input
