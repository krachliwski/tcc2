import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './menu.css';
import Logo from '../../images/logo.png';
import { BsYoutube, BsInstagram } from 'react-icons/bs';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <Navbar className="Navbar" expand="lg">
                    <Container>
                        <Navbar.Brand className="Logo" href="#home">
                            <img
                                alt="Logo"
                                src={Logo}
                                width="80"
                                height="80"
                            />{' '}
                            E-Flanelinha
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="Nav">
                                <Nav.Link className="Letras" href="#home">Página Principal</Nav.Link>
                                <Nav.Link className="Letras" href="#sobre">Sobre Nós</Nav.Link>
                                <Nav.Link className="Letras" href="#details">Detalhes do Projeto</Nav.Link>
                                <a className="social" href="https://youtube.com">
                                    <BsYoutube color="#000" size={24} />
                                </a>
                                <a className="social" href="https://instagram.com/krachliwski">
                                    <BsInstagram color="#F000FF" size={24} />
                                </a>
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