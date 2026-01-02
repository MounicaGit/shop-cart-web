import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import SignUp from './pages/SignUp';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const AppRoutes = () => {
    const { user } = useAuth();
    return (
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <SignIn />} />
        <Route path="login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute>} />
      </Routes>

    )
  }
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;