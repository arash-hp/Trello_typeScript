import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from '../layouts/Layout';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';

export interface IApplicationProps {}

const MyApp: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about">
                    <Route index element={<DashboardPage />} />
                    <Route path=":number" element={<DashboardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MyApp;