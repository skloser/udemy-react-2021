import { useState, useRef } from "react/cjs/react.development";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const UserInput = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState(0);

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const nameChangeHandler = (event) => {
		setUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setUserAge(event.target.value);
	};

	const submitUser = (event) => {
		event.preventDefault();

		if (userAge < 0) {
		}

		props.addUser({ name: userName, age: userAge });

		setUserName("");
		setUserAge(0);
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={submitUser}>
				<label htmlFor="username" className={classes.form__label}>
					Username
				</label>
				<input
					id="username"
					type="text"
					className={classes.form__input}
					onChange={nameChangeHandler}
					value={userName}
					ref={nameInputRef}
				/>
				<label htmlFor="age" className={classes.form__label}>
					Age (Years)
				</label>
				<input
					id="age"
					type="number"
					className={classes.form__input}
					onChange={ageChangeHandler}
					value={userAge}
					min="0"
					step="1"
					ref={ageInputRef}
				/>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default UserInput;
