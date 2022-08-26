import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };

  return (
    <Card className="expense-Contain">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="car">{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
