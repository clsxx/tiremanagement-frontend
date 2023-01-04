import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import TireManagementAppBar from './components/TireManagementAppBar';
// import Login from './components/LogIn';
import LoginPage from './pages/LoginPage';

// export default function App() {
//   return (
//     <div className="App">
//       <TireManagementAppBar/>
//       <Login/>
//     </div>
//   );
// }

export default function App() {
  return (
      <div className="App">
        <TireManagementAppBar/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginPage />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}