import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';


const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loginStatus');
        navigate("/");
        window.location.reload();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">iNoteBook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about" >About</Link>
                            </li>

                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link className="btn btn-outline-warning mx-2" to="/login" role="button">
                                LogIn
                            </Link>
                            <Link className="btn btn-warning mx-2" to="/signup" role="button">
                                SignUp
                            </Link>
                        </form> : <div className='d-flex'>
                            <div className="btn-group">
                                <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-user-circle"></i>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-start">
                                    <li><Link className="dropdown-item" type="button" to="/account">My Account</Link></li>
                                    <li><Link className="dropdown-item" type="button" to="/notes">Your Notes</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button onClick={handleLogout}className="dropdown-item" type="button">Log Out</button></li>
                                </ul>
                            </div>
                        </div>}

                    </div>
                </div>
            </nav>
            <Outlet />
        </>

    )
}

export default Navbar;
