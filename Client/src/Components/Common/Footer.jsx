import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="container-fluid bg-dark text-white">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top ">
                <p className="col-md-4 mb-0 text-white">© 2024 CMS</p>

                <ul className="nav col-lg-8 justify-content-end mb-0">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link px-2 text-white">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/vendors'} className="nav-link px-2 text-white">Vendors</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/students'} className="nav-link px-2 text-white">Students</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/request-queries'} className="nav-link px-2 text-white">Request & Queries</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/feedbacks'} className="nav-link px-2 text-white">Feedbacks</Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}