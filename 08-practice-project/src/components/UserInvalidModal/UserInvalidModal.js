import classes from "./UserInvalidModal.module.css";
import Button from "../UI/Button";
import React from "react";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.closeHandler} />;
};

const Overlay = (props) => {
	return (
		<div className={classes.userModal}>
			<div className="user-modal__title">Invalid input</div>
			<div className="user-modal__content">{props.message}</div>
			<div className="user-modal__action">
				<Button onClick={props.closeHandler} className={`${classes.button}`}>
					Ok
				</Button>
			</div>
		</div>
	);
};

const UserInvalidModal = (props) => {
	return <React.Fragment>
		{ReactDOM.createPortal(<Backdrop closeHandler={props.closeHandler} />, document.getElementById("backdrop-root"))}
	</React.Fragment>
};

export default UserInvalidModal;
