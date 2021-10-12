import classes from "./UserInvalidModal.module.css";
import Button from "../UI/Button";

const UserInvalidModal = (props) => {
	const onCloseHandler = () => {
		props.closeHandler();
	};

	return (
		<div className={classes.backdrop} onClick={onCloseHandler}>
			<div className={classes.userModal}>
				<div className="user-modal__title">Invalid input</div>
				<div className="user-modal__content">{props.message}</div>
				<div className="user-modal__action">
					<Button onClick={onCloseHandler} className={`${classes.button}`}>Ok</Button>
				</div>
			</div>
		</div>
	);
};

export default UserInvalidModal;
