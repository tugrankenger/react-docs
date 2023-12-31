import { useState } from 'react';
import UserList from './components/UserList';
import UserContext from './context/UserContext';
import './App.css';

const data = [
  {
    id: '1',
    name: 'tugran',
    email: 'turankenger@hotmail.com.tr',
    age: 13,
    color: 'aliceblue',
  },
  {
    id: '2',
    name: 'juliet',
    email: 'julietburke@gmail.com',
    age: 14,
    color: 'orange',
  },
  {
    id: '3',
    name: 'james',
    email: 'jamessawyer@outlook.com',
    age: 99,
    color: 'cyan',
  },
];

function App() {
  const [users, setUers] = useState(data);

  const changeColor = (id, color) => {
    setUers(
      users.map((user) => (user.id === id ? { ...user, color: color } : user))
    );
  };
  return (
    <UserContext.Provider value={{ users, changeColor }}>
      <div className='App'>
        <header>
          <h1>Welcome!</h1>
        </header>
        <UserList />
      </div>
    </UserContext.Provider>
  );
}

export default App;
