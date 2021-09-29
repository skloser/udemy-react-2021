import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((e) => (
				<ExpenseItem
					date={e.date}
					title={e.title}
					price={e.amount}
					key={e.id}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
