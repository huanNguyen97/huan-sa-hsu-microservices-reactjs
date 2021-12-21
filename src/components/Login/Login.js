// Import from react
import React, { useState, useEffect } from 'react';

import {
    Form,
    Button
} from 'react-bootstrap';

// Import from owner
import history from '../../history/history';
import { login } from '../../urlCalling/url';

const Login = () => {
    // Set data
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [error, setError] = useState();
 
    // Login Handler
    const loginHandler = (e) => {
        e.preventDefault();

        fetch(login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                username: username,
                password: password
            })
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.Error) {
                setError(user.Error);
            } else {
                setError("");
            }

            if (error === "") {
                history.push({
                    pathname: '/',
                    search: '?username=' + username
                });
            }
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    };

    // Register changing
    const registerChangeHandler = () => {
        history.push('/register');
    }

    return (
        <div className="container">
            <br />
            <br />
            <h1>Login Form</h1>
            <br />
            <br />
            <Form style={{ 
                border: '2px solid black', 
                padding: '20px',
                width: '80%',
                marginLeft: '80px'
            }}>
                <strong><p style={{ 'color': 'red' }}>{error}</p></strong>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><h4>Username</h4></Form.Label>
                    <Form.Control 
                        size="sm" 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={event => setUsername(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><h4>Password</h4></Form.Label>
                    <Form.Control 
                        size="sm" 
                        type="password" 
                        placeholder="Password" 
                        onChange={event => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={loginHandler}>
                    Login
                </Button>
                <Button style={{ marginLeft: '100px' }} variant="success" onClick={registerChangeHandler}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Login;