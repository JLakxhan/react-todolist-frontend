import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cover from '../../assets/front.PNG';
import './register.css';

// Define Yup validation schema
const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required.'),
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email is required.'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long.')
    .required('Password is required.'),
});

const Register = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    };

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
        // Perform registration logic here
    };

    return (
        <div className="register-container">
            <div className="image-section">
                <div className="image-text">
                    <h1 className="image-heading">Welcome to the To Do list Page</h1>
                    <p className="image-subtext">Register to start adding your tasks</p>
                </div>
                <img src={cover} className="background-image" alt="background" />
            </div>

            <div className="form-section">

                {/* Formik form with validation schema and initial values */}
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={RegisterSchema}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ isSubmitting }) => (
                        <Form className="register-form">
                            <div className="register-header">
                                <h3 className="register-title">Register</h3>
                                <p className="register-subtext">Create your account to get started.</p>
                            </div>

                            <div className="input-fields">
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input name-input"
                                />
                                <ErrorMessage name="name" component="p" className="error-text" /> {/* Error for name */}

                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input email-input"
                                />
                                <ErrorMessage name="email" component="p" className="error-text" /> {/* Error for email */}

                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input password-input"
                                />
                                <ErrorMessage name="password" component="p" className="error-text" /> {/* Error for password */}
                            </div>

                            <div className="action-buttons">
                                <button type="submit" className="register-button" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Register'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>

                <div className="login-section">
                    <p className="login-text">
                        Already have an account?{" "}
                        <span className="login-link" onClick={goToLogin}>
                            Log in here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
