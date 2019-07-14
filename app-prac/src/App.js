import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user_list'

function App() {
  return (
    <div className="App">
      <h2>Username List:</h2>
      <UserList />
      <hr/>
      <h2>User Details:</h2>
    </div>
  )
}

export default App;
