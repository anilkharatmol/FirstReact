import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem=(props)=> {
  // return React.createElement(
  //   Card,
  //   {},
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement(ExpenseDetails, {
  //     title: props.title,
  //     amount: props.amount,
  //   })
  // );
  const[title,setTitle]=useState(props.title);

  function clickHandler(){
   setTitle('updated');
  };

  const[amount,setAmount]=useState(props.amount);

  function changePrice(){
   setAmount('100$');
  };
  return (
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <ExpenseDetails title={title} amount={amount} location={props.location}/>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={changePrice}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;
