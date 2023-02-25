import './ExpenseForm.css'
import { useState } from 'react';

export default function ExpenseForm(){

    const[title,enteredTitle]=useState('');
    function titleHandler(event){
        event.preventDefault();
        enteredTitle(event.target.value);
    }

    const[amount,enteredAmount]=useState('');
    function amountHandler(event){
        event.preventDefault();
        enteredAmount(event.target.value);
    }

    const[date,enteredDate]=useState('');
    function dateHandler(event){
        event.preventDefault();
        enteredDate(event.target.value);
    }

    function onAdd(event){
        event.preventDefault();
        const obj={
            title:title,
            amount:amount,
            date:new Date(date)
        }
        console.log(obj);
    }

    return(
        <form onSubmit={onAdd}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"  onChange={titleHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="1" step="1" onChange={amountHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" max="2023-02-25" onChange={dateHandler}/>
            </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}