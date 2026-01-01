import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
