import { useState } from 'react';
import './App.css';
import Card from './components/UI/Card';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import UserInvalidModal from './components/UserInvalidModal/UserInvalidModal';

function App() {

  const [users, addUser] = useState([]);
  const [showModal, toggleModal] = useState(false);

  const addUserHandler = (user) => {
    addUser([...users, user]);
  };

  const toggleModalHandler = (showModal) => {
    toggleModal(showModal);
  };

  return (
    <div className="App">
      <Card>
        <UserInput addUser={addUserHandler} showModal={toggleModalHandler}></UserInput>
        </Card>
      <Card>
        <UserList users={users}></UserList>
      </Card>
      {showModal ? <Card>
        <UserInvalidModal closeHandler={toggleModalHandler}/>
      </Card> : null}
      
    </div>
  );
}

export default App;
