import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './menu.css';
import Logo from '../../images/logo.png';
import { BsYoutube, BsInstagram } from 'react-icons/bs';

export default class Menu extends Component {
    render() {
        return (
            <div className="back-Nav">
                <div className="Menu">
                    <Navbar className="Navbar" expand="lg">
                        <Container>
                            <div className="Logo">
                                <Navbar.Brand href="/">
                                    <img
                                        alt="Logo"
                                        src={Logo}
                                        width="80"
                                        height="80"
                                    />{' '}
                                    E-Flanelinha
                                </Navbar.Brand>
                            </div>
                            <div className="Nav">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <Nav.Link className="Letras" href="/">Página Principal</Nav.Link>
                                        <Nav.Link className="Letras" href="/#sobre">Sobre Nós</Nav.Link>
                                        <Nav.Link className="Letras" href="/#details">Detalhes do Projeto</Nav.Link>
                                        <div className="DropDown">
                                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="generateQRCode">Gerar QRCode</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="parking">Consultar Vagas</NavDropdown.Item>
                                            </NavDropdown>
                                        </div>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                            <div className="Redes">
                                <a className="social" href="https://youtube.com">
                                    <BsYoutube color="#000" size={24} />
                                </a>
                                <a className="social" href="https://instagram.com">
                                    <BsInstagram color="#000" size={24} />
                                </a>
                            </div>
                        </Container>
                    </Navbar>
                </div>
            </div>
        );
    }
}
