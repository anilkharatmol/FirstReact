import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

export default function Expenses(props) {
  const[filteredYear,setfilteredYear]=useState('2020');

  function filterChangeHandler(selectedYear){
    setfilteredYear(selectedYear);
  }

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))} */}
      {props.items.filter((expense)=>{
        return expense.date.getFullYear().toString()===filteredYear;
      }).map((expense)=>(
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
      
    </Card>
  );
}
