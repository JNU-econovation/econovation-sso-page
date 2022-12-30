import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Login from './Login';
import SignUp from './signup/SignUp';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
