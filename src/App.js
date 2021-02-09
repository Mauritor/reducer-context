import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//COMPONENTS
import UserList from './components/UserList';
import Profile from './components/Profile';
//CONTEXT
import UserState from './contex/User/UserState';


function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
