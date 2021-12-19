import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase-config"
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Login Successfull")
                Navigate("/home")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Email and Password doesn't match")
            });

    }

    return (
        <div>
            <div className="login" >
                <div className="container">
                    <div className="login-inner" style={{ marginTop: "2rem" }}>
                        <input type="email" name="" id="" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" name="" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" onClick={handleSubmit}>Login</button>

                        <br />
                        <br />
                        <br />
                        <br />
                        <button type="submit" style={{ background: "none", color: "#000" }}>
                            <Link to="/">Go to Register</Link>
                        </button>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Login; 