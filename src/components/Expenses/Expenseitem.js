import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

function ExpenseItem(props) {
  return (
    <li>
    <Card className="expense-Contain">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="car">{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
