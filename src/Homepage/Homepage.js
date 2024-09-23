import React from 'react';
import WarningModal from '../Component/WarningModal';
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from '../Component/SideNav';
import { Container } from 'react-bootstrap';
import { useUserAuth } from "../userAuth/userAuthContext";


const HomePage = () => {
    const { user } = useUserAuth();
 
    if(user){
        return (
            <div className="dashboard d-flex">
            <div>
                <SideNav/>
            </div>
            <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
                <div style={{height:"100%"}}>
                    <Container>
                        Welcome!
                    </Container>
                </div>
            </div>
        </div>
        )
    }
    else{
        return (
            <>
                <WarningModal></WarningModal>
                    <iframe
                        title="Home" src="https://www.google.com/webhp?igu=1"
                        height="800px" width="100%" target="_self" frameBorder="0" scrolling="no">
                    </iframe>
            </>
        )
    }


};

export default HomePage;