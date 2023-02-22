import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
      <div className="expense-item">
       <h5>{props.date.toISOString()}</h5>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
    <h4>{props.location}</h4>
        <div className="expense-item__price">{props.amount}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
