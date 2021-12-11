import React, { useState, useEffect } from "react";
import { getDatabase, ref, push, set, onValue } from "firebase/database";
import { app } from "./firebase-config"
import { getAuth, signOut } from "firebase/auth";
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom";

function Home() {

    // const myState = useSelector((state) => state);
    // console.log(myState);


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [relation, setRelation] = useState("");
    const [open, setOpen] = useState(false);
    const [snap, setSnap] = useState([]);
    const [userName, setUserName] = useState("");

    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        const db = getDatabase(app);
        const postListRef = ref(db, 'posts');

        const newPostRef = push(postListRef);
        set(newPostRef, {
            name,
            phone,
            relation
        }).then(() => {
            setName("");
            setPhone("");
            setRelation("");
            setOpen(false)
        });
    }

    useEffect(() => {
        const db = getDatabase(app);
        const postListRef = ref(db, 'posts');

        onValue(postListRef, (snapshot) => {
            let userAfterLoad = []
            snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                userAfterLoad.push(childData)
            });

            setSnap(userAfterLoad)

        });

        if (!userName) {
            const auth = getAuth(app);
            const user = auth.currentUser;
            setUserName(user.displayName)
        }

    }, [])

    const modalOpen = () => {
        setOpen(true)
    }

    const modalRemove = () => {
        setOpen(false)
    }

    const handleLogout = () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            alert("Logout Successfull")
            Navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <h2>{userName}</h2>
                        </div>
                        <div className="header-right">
                            +8801963851464
                        </div>
                    </div>
                </div>
            </header>

            <main className="main">
                <div className="container">
                    <div className="main-inner">
                        {/* <input required type="text" name="name" id="name" placeholder="Type your Name" onChange={(e) => setName(e.target.value)} value={name} />
                        <input type="number" name="phone" id="phone" placeholder="Your Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} />

                        <input type="text" onChange={(e) => setRelation(e.target.value)} value={relation} placeholder="Friends or Family" /> */}

                        <button type="submit" onClick={modalOpen}>Add</button>
                    </div>
                </div>
            </main>


            <Modal
                basic
                onClose={false}
                onOpen={true}
                open={open}
                size='small'
            >
                <Modal.Content>
                    <div className="main-inner">
                        <input required type="text" name="name" id="name" placeholder="Type your Name" onChange={(e) => setName(e.target.value)} value={name} />
                        <input type="number" name="phone" id="phone" placeholder="Your Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} />

                        <input type="text" onChange={(e) => setRelation(e.target.value)} value={relation} placeholder="Friends or Family" />
                    </div>

                </Modal.Content>

                <Modal.Actions>
                    <Button basic color='red' inverted onClick={modalRemove} >
                        <Icon name='remove' /> Cancel
                    </Button>
                    <Button color='green' inverted onClick={handleSubmit}>
                        <Icon name='checkmark' /> Add
                    </Button>
                </Modal.Actions>
            </Modal>


            <div className="show-info">
                <div className="container">

                    {
                        snap.map((childSnapshot, index) => {
                            const { name, phone, relation } = childSnapshot;
                            return <>
                                <h2><span> {index + 1} </span>Name : {name + " , "}<span>Phone : {phone + " , "}</span> Relation :  {relation}</h2>
                            </>

                        })
                    }

                </div>
            </div>



            <Container style={{ textAlign: "center", marginTop: "3rem" }}>
                <Button color='green' inverted onClick={handleLogout}>
                    <Icon name='checkmark' /> Logout
                </Button>
            </Container>
        </>
    );
}

export default Home;
