import React, { useState } from 'react';
import cover from '../../assets/front.PNG';
import google from '../../assets/google.svg';
import { useNavigate } from "react-router-dom";
import './login.css';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({}); // State for form validation errors

    const goToRegister = () => {
        navigate("/register");
    };

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required.';
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required.';
        }

        return newErrors;
    };

    const handleLogin = () => {
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Proceed with login only if there are no validation errors
            if (email === "my@gmail.com" && password === '123') {
                navigate("/main");
            } else {
                alert("Invalid Credentials");
            }
        } else {
            setErrors(validationErrors); // Set errors if validation fails
        }
    };

    return (
        <div className="login-container">
            <div className="image-section">
                <div className="image-text">
                    <h1 className="image-heading">Welcome to the To Do list Page</h1>
                    <p className="image-subtext">Add your work by simply Logging In</p>
                </div>
                <img src={cover} className="background-image" alt="background" />
            </div>

            <div className="form-section">
                <div className="login-form">
                    <div className="login-header">
                        <h3 className="login-title">Login</h3>
                        <p className="login-subtext">Welcome Back! Please enter your credentials.</p>
                    </div>

                    <div className="input-fields">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input email-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>} {/* Display error if exists */}

                        <input
                            type="password"
                            placeholder="Password"
                            className="input password-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>} {/* Display error if exists */}
                    </div>

                    <div className="options">
                        <div className="remember-me">
                            <input type="checkbox" className="checkbox" />
                            <p className="remember-text">Remember me</p>
                        </div>
                        <p className="forgot-password">Forgot Password?</p>
                    </div>

                    <div className="action-buttons">
                        <button className="login-button" onClick={handleLogin}>Log In</button>
                        <button className="signin-button" onClick={goToRegister}>Sign In</button>
                    </div>

                    <div className="divider">
                        <p className="or-text">or</p>
                    </div>

                    <button className="google-signin">
                        <img src={google} className="google-icon" alt="Google" />
                        Sign in with Google
                    </button>
                </div>

                <div className="signup-section">
                    <p className="signup-text">
                        Don't have an account? <span className="signup-link">Sign up for free</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
