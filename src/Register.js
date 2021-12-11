import React, { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "./firebase-config"
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { set_phone } from './actions/action';

const Register = () => {

    const dispatch = useDispatch();


    const [username, setUserName] = useState("");
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState();

    let Navigate = useNavigate();

    const isFormEmpty = (username, email, phone, password) => {
        if (!username || !email || !phone || !password) {
            alert("Please fill all the field")
        } else {
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(set_phone(phone))

        if (isFormEmpty(username, email, phone, password)) {
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const auth = getAuth(app);
                    updateProfile(auth.currentUser, {
                        displayName: username,

                    }).then(() => {
                        alert("Account Created Sucessfull")
                        Navigate("/login")
                    }).catch((error) => {
                        alert("Display name not created")
                    });
                })
                .catch((error) => {
                    alert("There is an error")
                });
        }
    }


    return (
        <div className="registration">
            <div className="container">
                <div className="registration-inner" style={{ marginTop: "2rem" }}>
                    <input type="text" name="" id="" placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
                    <input type="email" name="" id="" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="number" name="" id="" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} />
                    <input type="password" name="" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Signup</button>


                    <br />
                    <br />
                    <br />
                    <br />
                    <button type="submit" style={{ background: "none", color: "#000" }}>
                        <Link to="/login">Go to Login</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register; 