import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './menu.css';
import Logo from '../../images/logo.png';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <Navbar className="Navbar" bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand className="Logo" href="#home">
                            <img
                                alt="Logo"
                                src= {Logo}
                                width="80"
                                height="80"
                            />{' '}
                            E-Flanelinha
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="Letras" href="#home">Página Principal</Nav.Link>
                                <Nav.Link className="Letras" href="#link">Sobre Nós</Nav.Link>
                                <Nav.Link className="Letras" href="#link">Detalhes do Projeto</Nav.Link>
                                <NavDropdown title="Menu" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Gerar QRCode</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">Consultar Vagas</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Menu;