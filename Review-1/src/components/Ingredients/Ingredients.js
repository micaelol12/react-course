import React, { useCallback, useReducer } from "react";
import useHttp from "../../hooks/http";
import ErrorModal from "../UI/ErrorModal";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

function Ingredients() {
  const [ingredientsState, ingredientsDispatch] = useReducer(
    ingredientReducer,
    []
  );

  const { isLoading, error, request, clear } = useHttp();

  const filteredIngredientsHandler = useCallback((ingredients) => {
    ingredientsDispatch({ type: "SET", payload: ingredients });
  }, []);

  const addIngredientHandler = useCallback(
    async (ingredient) => {
      request(
        "https://react-course-df8ff-default-rtdb.firebaseio.com/ingredients.json",
        "POST",
        JSON.stringify(ingredient),
        (data) => {
          console.log(data)
          const ingredientWithId = {id: data.name, ...ingredient }
          ingredientsDispatch({ type: "ADD", payload: ingredientWithId });
        }
      );
    },
    [request]
  );

  const removeIngredientHandler = useCallback(
    (id) => {
      request(
        `https://react-course-df8ff-default-rtdb.firebaseio.com/ingredients/${id}.json`,
        "DELETE",
        null,
        () => {
          ingredientsDispatch({ type: "DELETE", payload: id });
        }
      );
    },
    [request]
  );

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={ingredientsState}
          onRemoveItem={removeIngredientHandler}
        ></IngredientList>
      </section>
    </div>
  );
}

export default Ingredients;
