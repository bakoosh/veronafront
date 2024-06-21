import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ authUser, children }) => {
    return authUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
