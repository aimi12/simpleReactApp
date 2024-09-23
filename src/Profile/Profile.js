import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from '../Component/SideNav';
import { Container } from 'react-bootstrap';
import { useUserAuth } from "../userAuth/userAuthContext";

const Profile = () => {
    const { user } = useUserAuth();
    const name = user.email.match(/^([^@]*)@/)[1];
    // const storedName = sessionStorage.getItem('name');
    return (
        <div className="dashboard d-flex">
            <div>
                <SideNav/>
            </div>
            <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
                <div style={{height:"100%"}}>
                    <Container>
                        <h3>Name: {name}</h3>
                        <h3>Email: {user.email}</h3>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Profile;