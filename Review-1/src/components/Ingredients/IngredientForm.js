import React,{ useState }from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    
    const ingredient = {
      title : enteredTitle,
      amount: enteredAmount
    }

    props.onAddIngredient(ingredient)
  };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const inputTitleHandler =(event) => {
    setEnteredTitle(event.target.value)
  }

  const inputAmountHandler =(event) => {
    setEnteredAmount(event.target.value)
  }

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={enteredTitle} onChange={inputTitleHandler}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={enteredAmount} onChange={inputAmountHandler} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator/>}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
