import { Navbar,Container,Nav } from 'react-bootstrap';
const NavWs=()=>{
    return(
        <div>
              <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Assad</Nav.Link>
                    <Nav.Link href="#features">Olfa</Nav.Link>
                    <Nav.Link href="#pricing">Mahmoud</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavWs