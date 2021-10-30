import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const LogIn = () => {
    const { setUser, setError, signInUsingGoogle, setEmail, setPassword, logInWithPasswordEmail, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || 'home';
    const handelGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
                const user = result.user;
                setUser(user);
                setError('');
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    const handelEmail = e => {
        setEmail(e.target.value);
    }
    const handelPassword = e => {
        setPassword(e.target.value);
    }
    const handelLogin = e => {
        e.preventDefault();
        logInWithPasswordEmail()
            .then((userCredential) => {
                history.push(redirect_uri);
                const user = userCredential.user;
                setUser(user);
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
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
                <p>or log in with <Button onClick={handelGoogleLogIn} >Google</Button> </p>
                <p>{error}</p>
                <p>New user? <Link to="/register">Register</Link> now .</p>
            </Form>
        </div>
    );
};

export default LogIn;