import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'

const Register = () => {
    return (
        <form onSubmit={e => e.preventDefault()}
              className="login-form">
            <h2>Регистрация</h2>
            <label>
                Username:
                <input type="text" placeholder="username" className="auth-input"></input>
            </label>

            <label>
                Password:
                <input type="text" placeholder="password" className="auth-input"></input>
            </label>

            <div>
                <button type="submit" className="btn waves-effect waves-light">Подтвердить</button>
                <Link to="/login" className="auth-button">Уже зарегистрированы?</Link>
            </div>

        </form>
    );
};

export default Register;