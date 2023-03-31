import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const FilteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === FilteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesChart expenses={FilteredExpenses} />
      <ExpensesFilter
        selected={FilteredYear}
        onChangeFilter={FilterChangeHandler}
      />
      <ExpensesList expenses={FilteredExpenses} />
    </Card>
  );
};

export default Expenses;
