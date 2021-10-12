import classes from "./UserList.module.css";
import User from "../User/User";
import Card from "../UI/Card";

const UserList = (props) => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					<User
						name={user.name}
						age={user.age}
						key={user.name + user.age + Math.random()}
					/>
				))}
			</ul>
		</Card>
	);
};

export default UserList;
