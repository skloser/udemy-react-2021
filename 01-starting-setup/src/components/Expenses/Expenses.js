import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';


const Expenses = (props) => {

	const [selectedYear, onDateFilter] = useState('2020');

	const filteredExpenses = props.expenses.filter(expense => {
		return expense.date.getFullYear().toString() === selectedYear;
	});

	const onFilterByDate = date => {
		onDateFilter(date);
	};


	return (
		<Card className="expenses">
			<ExpensesFilter selectedYear={selectedYear} filterByDate={onFilterByDate}></ExpensesFilter>
			<ExpensesChart expenses={filteredExpenses}></ExpensesChart>
			<ExpensesList items={filteredExpenses}></ExpensesList>
		</Card>
	);
}

export default Expenses;
