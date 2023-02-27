import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const[filteredYear,setfilteredYear]=useState('2020');

  function filterChangeHandler(selectedYear){
    setfilteredYear(selectedYear);
  }

  const filteredExpenses= props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })  

  return (
    <div>

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
      <ExpensesChart expenses={filteredExpenses}> </ExpensesChart>
     <ExpenseList items={filteredExpenses} />
    </Card>
      </div>
  );
    }
