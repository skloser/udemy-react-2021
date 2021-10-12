import { useState } from "react";
import "./App.css";
import Card from "./components/UI/Card";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import UserInvalidModal from "./components/UserInvalidModal/UserInvalidModal";

function App() {
	const [users, addUser] = useState([]);
	const [showModal, toggleModal] = useState(false);
	const [message, updateMessage] = useState("");

	const addUserHandler = (user) => {
		if (!user.name && !user.age) {
			updateMessage("Please enter a valid name and age (non-empty values).");
			toggleModal(true);
		} else if (user.age < 0) {
			updateMessage("Please enter a valid age (> 0).");
			toggleModal(true);
		} else {
			addUser([...users, user]);
		}
	};

	const closeModalHandler = () => {
		toggleModal(false);
	};

	return (
		<div className="App">
			<div className="wrapper">
				<UserInput addUser={addUserHandler} />
				<UserList users={users} />
				{showModal ? (
					<UserInvalidModal
						closeHandler={closeModalHandler}
						message={message}
					/>
				) : null}
			</div>
		</div>
	);
}

export default App;
