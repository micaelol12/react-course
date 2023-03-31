import useInput from "../../hooks/use-Input";
import InputV2 from "../UI/InputV2";
import classes from "./Checkout.module.css";

const nonNullable = (value) => value.trim() !== "";
const FiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const nameControl = useInput(nonNullable);
  const streetControl = useInput(nonNullable);
  const postalControl = useInput(FiveChars);
  const cityControl = useInput(nonNullable);

  const formIsValid =
    nameControl.isValid &&
    streetControl.isValid &&
    postalControl.isValid &&
    cityControl.isValid;

  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const user = {
      name: nameControl.value,
      street: streetControl.value,
      postal: postalControl.value,
      city: cityControl.value,
    };
    props.onConfirm(user)
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <InputV2
        control={nameControl}
        label="Your Name"
        errorMessage="Enter a valid name"
        type="text"
        id="name"
      ></InputV2>
      <InputV2
        control={streetControl}
        label="Street"
        errorMessage="Enter a valid street"
        type="text"
        id="street"
      ></InputV2>
      <InputV2
        control={postalControl}
        label="Postal Code"
        errorMessage="Enter a valid postal"
        type="text"
        id="postal"
      ></InputV2>
      <InputV2
        control={cityControl}
        label="City"
        errorMessage="Enter a valid city"
        type="text"
        id="city"
      ></InputV2>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
