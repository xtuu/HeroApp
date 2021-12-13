import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../pages/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route path="/*" element={

                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                }

                />



                // <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
        </Fragment>
    )
}
