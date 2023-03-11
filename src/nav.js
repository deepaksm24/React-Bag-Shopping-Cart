import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function NavBarapp() {
  return (
    <div className="App">
      
    <Navbar bg="light" variant="light" className="navbar sticky-top">
        <Container>
          <Navbar.Brand href="#home">Bag Zone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
{/* 
          <Navbar.Collapse className="justify-content-end">
          <Button variant="info">Cart <span>0</span></Button>
        </Navbar.Collapse> */}
        </Container>
      </Navbar>  
    </div>
  );
}




export default NavBarapp;
