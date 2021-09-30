import './UserInvalidModal.css';

const UserInvalidModal = (props) => {

    const onCloseHandler = () => {
        props.closeHandler(false);
    };

    return (
        <div className="user-modal">
            <div className="user-modal__title">Invalid input</div>
            <div className="user-modal__content">{props.message}</div>
            <div className="user-modal__action">
                <button onClick={onCloseHandler} className="button">Ok</button>
            </div>
        </div>
    );
};

export default UserInvalidModal;