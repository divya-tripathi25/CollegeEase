import React from 'react';
import { Routes, Route } from "react-router-dom";

import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { AuthProtected } from './AuthProtected';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>

                <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={route.component}
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>

                <Route>
                    {authProtectedRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtected>
                                    <Header />
                                    {route.component}
                                    <Footer/>
                                </AuthProtected>
                            }
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>

            </Routes>
        </React.Fragment>
    );
};

export default Index;