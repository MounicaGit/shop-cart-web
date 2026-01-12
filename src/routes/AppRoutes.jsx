

import { Navigate, Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import Home from '../features/home/screens/Home';
import SignIn from '../features/auth/screens/SignIn';
import PrivateRoute from './PrivateRoute';
import SignUp from '../features/auth/screens/SignUp';
import ProductDetailsPage from '../features/home/screens/ProductDetailsPage';
import ProductDetailsTab from '../features/home/screens/ProductDetailsTab';
import ProductSpecificationsTab from '../features/home/screens/ProductSpecificationsTab';
import ProductReviewsTab from '../features/home/screens/ProductReviewsTab';
import CartPage from '../features/cart/screens/CartPage';

export default function AppRoutes() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <SignIn />} />
            <Route path="login" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute>} />
            <Route path="/product-details/:id/*" element={<ProductDetailsPage />}>
                <Route index element={<Navigate to="details" replace />} />
                <Route path="details" element={<ProductDetailsTab />} />
                <Route path="specifications" element={<ProductSpecificationsTab />} />
                <Route path="reviews" element={<ProductReviewsTab />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
        </Routes>

    )
}