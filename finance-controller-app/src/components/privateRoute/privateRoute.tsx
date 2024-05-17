import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(Boolean(token));
    }, []);

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;