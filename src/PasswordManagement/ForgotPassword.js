import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useUserAuth } from "../userAuth/userAuthContext";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate;
    const [email, setEmail] = useState('');
    const { resetPassword } = useUserAuth();
    const triggerResetEmail = async (e) => {
        // e.preventDefault();
        try {
        e.preventDefault()
          await resetPassword(email);
          alert("Check your gmail")
          navigate("/");
        } catch (err) {
          //alert();
        }
      };
    return (
        <Container>
            <h3 className="text-center">Reset Password</h3>
            <Form onSubmit={triggerResetEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Nav.Item>
                        <Nav.Link href="/SignIn">Back to Login</Nav.Link>
                    </Nav.Item>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={triggerResetEmail}>
                    Reset Password
                </Button>
            </Form>
        </Container>
       
    );
}
  


export default ForgotPassword;