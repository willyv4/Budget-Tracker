import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 212.21,
      date: new Date(2021, 3, 30),
    },
    {
      id: "e2",
      title: "Gas",
      amount: 45.31,
      date: new Date(2021, 1, 23),
    },
    {
      id: "e3",
      title: "Groceries",
      amount: 150.57,
      date: new Date(2021, 6, 1),
    },
    {
      id: "e4",
      title: "Mortgage",
      amount: 1421.0,
      date: new Date(2021, 1, 12)
    }
  ];

  return (
    <div>
      <NewExpenses/>
      <Expenses items={expenses}/>
    </div>
    );
  }

  export default App;
