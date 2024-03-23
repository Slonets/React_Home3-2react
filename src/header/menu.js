import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const Menu=()=> {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Список справ</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="tasks" className="nav-link">Всі справи</Link>
                        <Link to="addTask" className="nav-link">Додати справу</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu;