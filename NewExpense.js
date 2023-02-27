import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props){

    const[OpenForm,setOpenForm]=useState(false);

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setOpenForm(false)
    }

    function startOpenForm(){
        setOpenForm(true);
    }

    function stopOpenForm(){
        setOpenForm(false);
    }

    return (
        <div className='new-expense'>
            {(!OpenForm && <button onClick={startOpenForm}>Add New Expense</button>)}
            {(OpenForm && <ExpenseForm SaveExpense={saveExpenseDataHandler} onCancel={stopOpenForm}></ExpenseForm>)}
            
        </div>
    )
}