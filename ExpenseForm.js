import './ExpenseForm.css'

export default function ExpenseForm(){

    function titleHandler(event){
        event.preventDefault();
        console.log(event.target.value);
    }

    function amountHandler(event){
        event.preventDefault();
        console.log(event.target.value);
    }

    function dateHandler(event){
        event.preventDefault();
        console.log(event.target.value);
    }

    return(
        <form>
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