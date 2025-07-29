import React from "react";
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="px-3 py-2 text-bg-dark border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none" style={{ width: '5rem' }}>
                            <img src={Logo} alt="" className="img-fluid" style={{ borderRadius: '50%' }} />
                        </a>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <Link to={'/'} className="nav-link text-white d-flex justify-content-center align-items-center flex-column">
                                    <span className="material-symbols-outlined">
                                        dashboard
                                    </span>
                                    <div>Dashboard</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/vendors'} className="nav-link text-white d-flex justify-content-center align-items-center flex-column">
                                    <span className="material-symbols-outlined">
                                        group
                                    </span>
                                    <div>Vendors</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/students'} className="nav-link text-white d-flex justify-content-center align-items-center flex-column">
                                    <span className="material-symbols-outlined">
                                        school
                                    </span>
                                    <div>Students</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/request-queries'} className="nav-link text-white d-flex justify-content-center align-items-center flex-column">
                                    <span className="material-symbols-outlined">
                                        article_shortcut
                                    </span>
                                    <div>Request & Queries</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/feedbacks'} className="nav-link text-white d-flex justify-content-center align-items-center flex-column">
                                    <span className="material-symbols-outlined">
                                        sms
                                    </span>
                                    <div>Feedbacks</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
