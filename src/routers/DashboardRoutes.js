import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import { Navbar } from '../components/Navbar'
import { Marvel } from '../pages/marvel/Marvel';
import { Dc } from '../pages/dc/Dc';
import { Search } from '../pages/search/Search';
import { Hero } from '../pages/hero/Hero';
import { Home } from '../pages/Home';

export const DashboardRoutes = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='p-4'>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/marvel" element={<Marvel />} />
                    <Route path="/dc" element={<Dc />} />
                    <Route path="/hero/:id" element={<Hero />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>

        </Fragment>
    )
}
