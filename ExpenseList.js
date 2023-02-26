import ExpenseItem from "./ExpenseItem";

import './ExpenseList.css'

export default function ExpenseList(props){

let expenseContent=<h2 className="expenses-list__fallback">No expenses found</h2>;

if(props.items.length >0 ){
  expenseContent=props.items.map((expense)=>(
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      location={expense.location}
    />
  ))
}

  if(props.items.length===1)
  {
    expenseContent=props.items.map((expense)=>(
      <div>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location} 
        />
      < h2 className="xpenses-list__fallback">Only single Expense here. Please add more...</h2>
        </div>
        )) 
}

return(
    <ul className="expenses-list">
        {expenseContent}
    </ul>
)
}