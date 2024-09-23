import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import { Form, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import SideNav from '../Component/SideNav';
import { useUserAuth } from "../userAuth/userAuthContext";
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const navigate = useNavigate;
    const [error, setError] = useState("");
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newConfirmPassword, setNewConfirmPassword] = useState('');
    const { changePassword, reAuth, logOut } = useUserAuth();

    const handleSubmit = async (e) => {
        setError("");
        if(  currentPassword !== localStorage.getItem("myPassword"))
        {
            alert("Your Current password is not match");
        }
        else if (currentPassword == null) {
            alert("Your Current password cannot be null");
        }
        else if (newPassword !== newConfirmPassword) {
            alert("New Passowrd is not the same!");
        }
        else if(currentPassword === newPassword || currentPassword === newConfirmPassword){
            alert("New Passowrd cannot be same with Current Password");
        }
        else if (newConfirmPassword === newPassword && newPassword !== currentPassword) {
            changePassword(newPassword);
             try {
                  e.preventDefault()
                  await reAuth(newPassword);
                  await changePassword(currentPassword, newPassword);
                  await reAuth(newPassword);
                  logOut();
                  navigate("/");
                } catch (err) {
                    if(err.code === "auth/requires-recent-login"){
                        setError(err.message);
                    } 
         
            };
        }
        
    }


    return (
        <div className="dashboard d-flex">
            <div>
                <SideNav/>
            </div>
            <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
                <div style={{height:"100%"}}>
                    <Container>
                        <h3 className="text-center">Change Password</h3>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>        
                            <Form.Group className="mb-3">
                                <Form.Label> Current Password</Form.Label>
                                <Form.Control type="text" placeholder="Please enter Current Password"  onChange={(e) => setCurrentPassword(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label> New Password</Form.Label>
                                <Form.Control type="text" placeholder="Please enter New Password"  onChange={(e) => setNewPassword(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label> Confirm New Password</Form.Label>
                                <Form.Control type="text" placeholder="Please enter Confirm New Password"  onChange={(e) => setNewConfirmPassword(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
      
    );
}
  


export default ChangePassword;