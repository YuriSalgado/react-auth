import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Nav = (props: { setAuthenticated : (authenticated: boolean) => void }) => {

    const history = useHistory();

    const logout = async () => {
        const response = await fetch('http://localhost:8000/api/logout', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })

        const logout = await response.json();debugger;
        if (logout.message === "success") {
            props.setAuthenticated(false);
            history.go(0);
        }
    }

    let menu = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
                <Link to="#" className="nav-link" onClick={logout}>Logout</Link>
            </li>
        </ul>
    )

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house me-2" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                    <strong>Home</strong>
                </Link>
                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};

export default Nav;