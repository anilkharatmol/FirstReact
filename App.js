import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Food",
      amount: "Rs 100",
      date: new Date(2023, 0, 11),
      LocationOfExpenditure: "Navi Mumbai",
    },
    {
      title: "Petrol",
      amount: "Rs 200",
      date: new Date(2023, 0, 21),
      LocationOfExpenditure: "Mumbai",
    },
    {
      title: "Gym",
      amount: "Rs 7000",
      date: new Date(2023, 0, 31),
      LocationOfExpenditure: "Nerul",
    },
  ];

  const exp=[];
  for(let i=0;i<expenses.length;i++){
      exp.push(<ExpenseItem  title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
        location={expenses[i].LocationOfExpenditure}/>);
  }

    return (
      <div>
      <h2>Let's get started!</h2>
      {exp}
      </div>
  );
}


export default App;
