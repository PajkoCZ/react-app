import "./navbarComp.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComp = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-info">Pavel Mancik - OSU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/tabs">Tabs</Nav.Link>
                            <Nav.Link href="snackbar">Snackbar</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp;