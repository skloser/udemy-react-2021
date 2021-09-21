import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';


const Expenses = (props) => {

	const [selectedYear, onDateFilter] = useState('2020');

	const onFilterByDate = date => {
		onDateFilter(date);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter selectedYear={selectedYear} filterByDate={onFilterByDate}></ExpensesFilter>
			{props.expenses.map((e) => (
				<ExpenseItem date={e.date} title={e.title} price={e.amount} key={e.id}/>
			))}
		</Card>
	);
}

export default Expenses;
