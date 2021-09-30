import "./UserInvalidModal.css";

const UserInvalidModal = (props) => {
	const onCloseHandler = () => {
		props.closeHandler();
	};

	return (
		<div className="backdrop" onClick={onCloseHandler}>
			<div className="user-modal">
				<div className="user-modal__title">Invalid input</div>
				<div className="user-modal__content">{props.message}</div>
				<div className="user-modal__action">
					<button onClick={onCloseHandler} className="button button--action">
						Ok
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserInvalidModal;
