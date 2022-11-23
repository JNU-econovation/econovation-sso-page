import { Routes, Route } from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';

import './App.css';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;
