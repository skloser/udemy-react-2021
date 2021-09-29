import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	// const [enteredTitle, setEnteredTitle] = useState('');
	// const [amountEntered, setEnteredAmount] = useState('');
	// const [dateEntered, setEnteredDate] = useState('');

	var [userInput, setUserInput] = useState({
		enteredTitle: "",
		amountEntered: "",
		dateEntered: "",
	});

	const [showForm, toggleForm] = useState(false);

	const titleChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};

	const amountChangeHandler = (event) => {
		setUserInput({
			...userInput,
			amountEntered: event.target.value,
		});
	};

	const dateChangeHandler = (event) => {
		setUserInput({
			...userInput,
			dateEntered: event.target.value,
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: +userInput.amountEntered,
			date: new Date(userInput.dateEntered),
		};

        props.onSaveExpenseData(expenseData);

        setUserInput({
            ...userInput,
            enteredTitle: '',
            amountEntered: '',
            dateEntered: ''
        });

		toggleForm(!showForm);
	};

	const toggleFormHandler = event => {
		toggleForm(!showForm);
	};

	if (!showForm) {
		return <button type="button" onClick={toggleFormHandler}>Add Expense</button>;
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="">Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={userInput.enteredTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
                        value={userInput.amountEntered}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Date</label>
					<input
						type="date"
						min="2019-01-01"
						step="2022-12-31"
                        value={userInput.dateEntered}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expenses__actions">
				<button type="button" onClick={toggleFormHandler}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
