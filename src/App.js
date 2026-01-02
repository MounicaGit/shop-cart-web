import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import PrivateRoute from './routes/PrivateRoute';
import { useSelector } from 'react-redux';

function App() {

  const AppRoutes = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    return (
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <SignIn />} />
        <Route path="login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute>} />
      </Routes>

    )
  }
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;