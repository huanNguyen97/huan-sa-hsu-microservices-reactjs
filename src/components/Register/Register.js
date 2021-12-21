// Import from reactjs
import React, { useState } from 'react';

import {
    Form,
    Button
} from 'react-bootstrap';

// Import owner
import { register } from '../../urlCalling/url';
import history from '../../history/history';

const Register = () => {
    // Set data
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [error, setError] = useState();
    
    // Register Handler
    const registerHandler = (e) => {
        e.preventDefault();
        
        // var for checking error

        fetch(register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                username: username,
                password: password,
                confirm_password: confirmPassword
            })
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.Error) {
                setError(user.Error);
            } else {
                setError();
            }
        })
        .then(user => {
            if (error === "") {
                history.push('/login');
            } else if (error !== "") {
                history.push('/register');
            }
        })
        .catch(() => {
            console.log("Server not found");    // For checking. Not alerting on mobile screen
        })
    };

    // loginChangeHandler
    const loginChangeHandler = () => {
        history.push('/login');
    }

    return (
        <div className="container">
            <br />
            <h1>Register Form</h1>
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><h4>Confirm password</h4></Form.Label>
                    <Form.Control 
                        size="sm" 
                        type="password" 
                        placeholder="Confirm Password" 
                        onChange={event => setConfirmPassword(event.target.value)}
                    />
                </Form.Group>
                <Button 
                    variant="warning" 
                    type="submit"
                    onClick={registerHandler}
                >
                    Register
                </Button>
                <Button style={{ marginLeft: '100px' }} variant="primary" onClick={loginChangeHandler}>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Register;