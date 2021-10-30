import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {

    const history = useHistory();
    const redirect_uri = '/home';
    const { setPassword, error, setUserName, password, setName, setError, setUser, setEmail, regitration } = useAuth();

    const handelName = e => {
        setName(e.target.value);
    };
    const handelEmail = e => {
        setEmail(e.target.value);
    };
    const handelePasswordChange = e => {
        setPassword(e.target.value);
    };
    const registrationHandeler = e => {

        e.preventDefault();
        if (password.length < 6) {
            setError('Password Should be more then 6 charecter');
            return;
        }
        regitration()
            .then((userCredential) => {
                history.push(redirect_uri);
                setUserName();
                const user = userCredential.user;
                setUser(user);
                setError('');
                e.target.value = '';

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <div>

            <Form className="regitration-Form" onSubmit={registrationHandeler} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Type Your Name</Form.Label>
                    <Form.Control onBlur={handelName} type="text" placeholder="You Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handelePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <p>{error}</p>
                <p> Already Registered? Then <Link to="/login">Log-In</Link> now .</p>
            </Form>
        </div>
    );
};

export default Register;