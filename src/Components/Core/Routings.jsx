import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from '../Home/Home';
import Profile from '../MyProfile/Profile';
import Dashboard from '../Others/Dashboard';
import Manager from '../Others/Manager';
import Others from '../Others/Others';

const Routings = () => {
    return <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='profile' element={<Profile />}>
                </Route>
            </Route>

            {/* <Route path='dashboard' element={<Dashboard/>}>
                <Route index element={<Manager />} />
                <Route path='others' element={<Others />}>
                </Route>
            
            </Route> */}
        </Routes>
    </>
}

export default Routings;