import LiveClockUpdate from "./LiveClock";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router";
import { useUserAuth } from "../userAuth/userAuthContext";

const NavBar = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
     // console.log(error.message);
    }
  };

  let authorized = (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Welcome {user && user.email}</Navbar.Brand>
          <Nav.Item className="ml-auto">
            <Nav.Link><LiveClockUpdate/></Nav.Link>
            <Nav.Link onClick={handleLogout} >Log out</Nav.Link>
          </Nav.Item>
      </Container>
    </Navbar>
  );

  let unauthorized = (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav.Item className="ml-auto">
            <Nav.Link><LiveClockUpdate/></Nav.Link>
            <Nav.Link href="/SignIn">Login</Nav.Link>
          </Nav.Item>
      </Container>
    </Navbar>
  );

  if(user){
    return authorized;
  }else{
    return unauthorized;
  }

};

export default NavBar;