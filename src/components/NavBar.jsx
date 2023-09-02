import React from "react"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-centered">
            <div className="container">
                <div className="navbar-brand">BIGYAN</div>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar