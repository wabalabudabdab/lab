import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <form onSubmit={e => e.preventDefault()}
        className="login-form">
            <h2>Авторизация</h2>
            <label>
                Username:
                <input type="text" placeholder="username" className="auth-input"></input>
            </label>

            <label>
                Password:
                <input type="text" placeholder="password" className="auth-input"></input>
            </label>

            <div>
                <button type="submit" className="btn waves-effect waves-light">Войти</button>
                <Link
                    to="/register"
                    className="auth-button">
                        Нет аккаунта?
                </Link>
            </div>

        </form>
    );
};

export default Login;