import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const isAuth = false

    const activeStyles = {
        color: 'black'
    }

    return (
        <navbar className="navbar">


            <ul className="navbar_ul">
                <li>
                    <NavLink
                        to={'/'}
                        href='/'
                        className="navbar_link"
                        style={({isActive}) => isActive ? activeStyles : undefined }
                >
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/new'}
                        href="/new"
                        className="navbar_link" style={({isActive}) => isActive ? activeStyles : undefined }
                    >
                        Добавить пост
                    </NavLink>
                </li>
                <li>
                    <button className="navbar_button">Войти</button>
                </li>
            </ul>

        </navbar>
    );
};

export default Navbar;