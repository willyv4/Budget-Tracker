import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const dumb_Expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 212.21,
    date: new Date(2020, 3, 30),
  },
  {
    id: "e2",
    title: "Gas",
    amount: 45.31,
    date: new Date(2022, 1, 23),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 150.57,
    date: new Date(2022, 6, 1),
  },
  {
    id: "e4",
    title: "Mortgage",
    amount: 1421.0,
    date: new Date(2019, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dumb_Expenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
