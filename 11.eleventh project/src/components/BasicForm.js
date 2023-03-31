import useInputV2 from "../hooks/use-inputv2";
import Input from "./UI/Input";

const BasicForm = (props) => {
  const nameControl = useInputV2((value) => value.trim() !== "");

  const latNameControl = useInputV2((value) => value.trim() !== "");

  const emailControl = useInputV2((value) => value.includes("@"));

  const formValid =
    nameControl.isValid && latNameControl.isValid && emailControl.isValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formValid) {
      return;
    }

    const user = {
      name: nameControl.value,
      lastname: latNameControl.value,
      email: emailControl.value,
    };

    console.log(user);
    nameControl.reset();
    latNameControl.reset();
    emailControl.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <Input
          control={nameControl}
          errorMessage="Enter a valid name"
          label="First Name"
        ></Input>
        <Input
          control={latNameControl}
          errorMessage="Enter a valid last name"
          label="Last Name"
        ></Input>
        <Input
          control={emailControl}
          errorMessage="Enter a valid email"
          label="E-Mail Address"
        ></Input>
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
