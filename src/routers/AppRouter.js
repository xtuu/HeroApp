import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../pages/login/Login';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<DashboardRoutes /> } /> 
            </Routes>
        </Fragment>
    )
}
