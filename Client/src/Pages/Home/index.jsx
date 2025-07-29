import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <>
            <div className='text-bg-dark cover-home'>

                <div className="cover-container d-flex p-3 mx-auto flex-column">

                    <main className="px-3">
                        <div className="title text-center position-relative">
                            <h1>CanteenEase</h1>
                        </div>
                        <h5>Simplified Canteen Management Software</h5>
                        <p className="lead mt-3" style={{ fontSize: '.95rem' }}>
                            CanteenEase is a comprehensive software solution designed to streamline and optimize canteen operations. From managing food orders and inventory to handling payments and reporting, this application provides a user-friendly interface for both staff and customers.
                        </p>

                        <div className="ctn">
                            <Link to={'/login?Admin'} className='btn btn-light text-dark me-2'>Login As Admin</Link>
                            <Link to={'/login?Vendor'} className='btn btn-light text-dark me-2'>Login As Vendor</Link>
                            <Link to={'/login?Student'} className='btn btn-light text-dark me-2'>Login As Student</Link>
                        </div>

                    </main>

                    <footer className="cover-footer mt-auto text-white-50">
                        <p>Canteen Management System<a href="#" className="text-white"> CMS.</a> <a href="https://twitter.com/mdo" className="text-white"></a>.</p>
                    </footer>
                </div>

            </div>
        </>
    )
}
