import './User.css';

const User = (props) => {
    return (
        <li className="user">
            {props.name} ({props.age} years old)
        </li>
    );
};

export default User;