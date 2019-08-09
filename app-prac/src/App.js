import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './containers/user_list'
import UserDetails from './containers/user_details'

function App() {
  return (
    <div className="App">
      <h2>Username List:</h2>
      <UserList />
      <hr/>
      <h2>User Details:</h2>
      <UserDetails />
    </div>
  )
}

export default App;
