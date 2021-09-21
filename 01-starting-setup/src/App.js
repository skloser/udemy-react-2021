import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
	const expenses = [
		{
			id: "el1",
			title: "Car insurance 2",
			amount: 2655.54,
			date: new Date(2021, 2, 24),
		},
		{
			id: "el2",
			title: "Car insurance",
			amount: 2654.54,
			date: new Date(2021, 2, 23),
		},
		{
			id: "el3",
			title: "Car insurance 3",
			amount: 2657.54,
			date: new Date(2021, 2, 25),
		},
		{
			id: "el4",
			title: "Car insurance 4",
			amount: 2658.54,
			date: new Date(2021, 2, 26),
		},
	];

  const addExpenseHandler = expense => {
    // expenses.push(expense);
    console.log('In App.js')
  };

	return (
		<div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
			<Expenses expenses={expenses}></Expenses>
		</div>
	);
}

export default App;
