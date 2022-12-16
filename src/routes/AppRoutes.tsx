import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import HomePage from '../pages/HomePage';

export interface IApplicationProps {}

const MyApp: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="dashboard">
                    <Route index element={<DashboardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default MyApp;