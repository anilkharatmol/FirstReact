import './ExpenseItem.css';

function ExpenseItem() {
const expenseDate=new Date(2023,1,21);
const expenseTitle='Food';
const expenseAmount='Rs 100';
const LocationOfExpenditure='Navi Mumbai';

  return (
      <div className="expense-item">
        <h5>{expenseDate.toISOString()}</h5>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
    <h4>{LocationOfExpenditure}</h4>
        <div className="expense-item__price">{expenseAmount}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
