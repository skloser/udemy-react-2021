import './UserList.css';
import User from '../User/User';

const UserList = (props) => {
    return(
        <div className="users">
            {props.users.map((user) => <User name={user.name} age={user.age}/>)}
        </div>
    );
};

export default UserList;