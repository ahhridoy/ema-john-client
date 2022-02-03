import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register</h2>
                <form onChange="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Your Password" />
                    <br />
                    <input type="password" placeholder="Re-Enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <br />
                <div>--------Or-------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;
