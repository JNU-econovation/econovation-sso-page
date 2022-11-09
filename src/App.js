import Login from './Login';
import { Routes, Route } from 'react-router-dom';

import './App.css';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  );
}

export default App;
