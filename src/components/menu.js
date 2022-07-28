import React from "react";
import '../css/menu.css';
import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/Customer"> Customer </Link> </li>
                <li><Link to="/Login"> Admin </Link> </li>
            </ul>
        </nav>
    );
};