import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Register = () => {
    const { setPassword, error, setName, setEmail, regitration } = useFirebase()

    const handelName = e => {
        setName(e.target.value)
    }
    const handelEmail = e => {
        setEmail(e.target.value)
    }
    const handelPassword = e => {
        setPassword(e.target.value)
    }
    const registrationHandeler = e => {
        e.target.value = '';

        e.preventDefault();
        regitration();
    }
    return (
        <div>
            <form onClick={registrationHandeler}>

                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Type Your Name</label>
                    <input onBlur={handelName} type="text" className="form-control" id="exampleInputText" aria-describedby="TextHelp" required />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handelEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handelPassword} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <p>{error}</p>
                <p>Already Registered? <Link to="/login">LogIn</Link> now .</p>
            </form>
        </div>
    );
};

export default Register;