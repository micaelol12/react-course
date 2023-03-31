import React, { useState, useCallback, useEffect, useRef } from "react";
import useHttp from "../../hooks/http";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadIngredients } = props;

  const [enteredFilter, setEnteredFilter] = useState("");

  const filteredHandler = (event) => {
    setEnteredFilter(event.target.value);
  };

  const inputRef = useRef();
  const { request,error,isLoading, clear } = useHttp();

  const getIngredients = useCallback(async () => {
    console.log("digitou");
    if (enteredFilter === inputRef.current.value) {
      const query =
        enteredFilter.length === 0
          ? ""
          : `?orderBy="title"&equalTo="${enteredFilter}"`;
      request(
        "https://react-course-df8ff-default-rtdb.firebaseio.com/ingredients.json" +
          query,
        null,
        null,
        (data) => {
          const filteredData = [];
          for (const key in data) {
            filteredData.push({
              amount: data[key].amount,
              title: data[key].title,
              id: key,
            });
          }
          onLoadIngredients(filteredData);
        }
      );
    }
    return;
  }, [enteredFilter, onLoadIngredients, request]);

  useEffect(() => {
    const timer = setTimeout(getIngredients, 500);
    return () => {
      clearInterval(timer);
    };
  }, [getIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            type="text"
            value={enteredFilter}
            onChange={filteredHandler}
            ref={inputRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
