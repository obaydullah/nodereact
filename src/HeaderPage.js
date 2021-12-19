import React, { useEffect, useState } from 'react'
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase-config"
import { getDatabase, ref, onValue } from "firebase/database";

const HeaderPage = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("")

    useEffect(() => {

        const auth = getAuth();
        const db = getDatabase(app);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                onValue(ref(db, `users/${auth.currentUser.uid}`), (snapshot) => {
                    setName(() => snapshot.val().username);
                    setPhone(() => snapshot.val().phone);
                });
            } else {
                console.log("No users found");
            }
        });


    }, [])

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <h2>{name}</h2>
                        </div>
                        <div className="header-right">
                            {phone}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderPage; 