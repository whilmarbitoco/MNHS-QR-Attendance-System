import React from "react";
import { Link } from "@inertiajs/react";

const Sidebar = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="/">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" href="/strand">
                        <i className="bi bi-people"></i>
                        <span>Strands</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" href="/student">
                        <i className="bi bi-people"></i>
                        <span>Students</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" href="#">
                        <i className="bi bi-book"></i>
                        <span>Classes</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
