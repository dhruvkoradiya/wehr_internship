import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import WeHRlogo from './img/logo.png';
import Dashboard from './component/dashboard';



function App() {
  
  
  return (

    <>
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={WeHRlogo} alt='WeHR Logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-buttons">
            <Nav.Link href="#home"><h3>Dashboard</h3></Nav.Link>
            <Nav.Link href="#todo"><h3>To-Do List</h3></Nav.Link>
            <Nav.Link href="#notifications"><h3>Notifications</h3></Nav.Link>
            <Nav.Link href="#people"><h3>People</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div> {/* Optional: Add a container div for styling */}
        <Dashboard/> {/* Render the dashboard component */}
        
      </div></> 

      
      
    );
  
}


export default App;

