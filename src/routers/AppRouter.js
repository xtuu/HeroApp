import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../pages/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
                />
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                }
                />
            </Routes>
        </Fragment>
    )
}
