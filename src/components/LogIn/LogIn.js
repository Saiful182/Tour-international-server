import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
const LogIn = () => {
    const { user, signInUsingGoogle, setEmail, setPassword, logInWithPasswordEmail, error } = useFirebase();
    const handelEmail = e => {
        setEmail(e.target.value);
    }
    const handelPassword = e => {
        setPassword(e.target.value);
    }
    const handelLogin = e => {
        e.preventDefault();
        logInWithPasswordEmail()
    }
    return (
        <div>
            <Form className="LoginForm" onSubmit={handelLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handelPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>or log in with <Button onClick={signInUsingGoogle} >Google</Button> </p>
                <p>{error}</p>
                <p>New user? <Link to="/register">Register</Link> now .</p>
            </Form>
        </div>
    );
};

export default LogIn;