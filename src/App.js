import * as React from 'react';
import './App.css';
import TireManagementAppBar from './components/TireManagementAppBar';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">
      <TireManagementAppBar/>
      <LogIn/>
    </div>
  );
}

export default App;
