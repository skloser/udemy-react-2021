import { useState } from 'react';
import './App.css';
import Card from './components/UI/Card';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';

function App() {

  const [users, addUser] = useState([]);

  const addUserHandler = (user) => {
    addUser([...users, user]);
  };

  return (
    <div className="App">
      <Card>
        <UserInput addUser={addUserHandler}></UserInput>
        </Card>
      <Card>
        <UserList users={users}></UserList>
      </Card>
    </div>
  );
}

export default App;
