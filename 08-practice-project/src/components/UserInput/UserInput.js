import { useState } from 'react/cjs/react.development';
import './UserInput.css';

const UserInput = (props) => {

    const [user, setUser] = useState({});

    const nameChangeHandler = (event) => {

        setUser((prevState) => {
            return {...prevState, name: event.target.value};
        });
    };

    const ageChangeHandler = (event) => {

        setUser((prevState) => {
            return {...prevState, age: event.target.value}
        })
    };

    const submitUser = (event) => {
        event.preventDefault();
        
        props.addUser(user);
    };

    return (
        <form className="form">
            <label className="form__label">Username</label>
            <input type="text" className="form__input" onChange={nameChangeHandler}/>
            <label className="form__label">Age (Years)</label>
            <input type="number" className="form__input" onChange={ageChangeHandler}/>
            <button onClick={submitUser} className="button">Add User</button>
        </form>
    );
};

export default UserInput;