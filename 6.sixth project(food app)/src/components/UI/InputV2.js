import classes from "./InputV2.module.css";

const InputV2 = ({ control, label, errorMessage,id,type }) => {
  return (
    <div className={`${classes.control} ${control.hasError ? classes.invalid : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={control.value}
        onChange={control.changeValueHandler}
        onBlur={control.blurHandler}
      />
      {control.hasError && <p className={classes["error-message"]}>{errorMessage}</p>}
    </div>
  );
};

export default InputV2;
