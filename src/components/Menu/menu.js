import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './menu.css';
import Logo from '../../images/logo.png';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import swal from 'sweetalert2';
import * as Yup from "yup";

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
                                    <a className="BrandName">E-Flanelinha</a>
                                </Navbar.Brand>
                            </div>
                            <div className="Nav">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <Nav.Link className="Letras" href="/">Página Principal</Nav.Link>
                                        <Nav.Link className="Letras" href="/#sobre">Sobre Nós</Nav.Link>
                                        <Nav.Link className="Letras" href="/#details">Detalhes do Projeto</Nav.Link>
                                        <Nav.Link className="Letras" //href="login"
                                        onClick={() => {
                                            swal.fire({
                                                title: "Insira o token para acesar a página",
                                                icon: "warning",
                                                input: "password",
                                                inputAttributes: {
                                                    autocapitalize: 'off'
                                                  },
                                                inputValidator: (input) => {
                                                    if (input == '123') window.location.href = "/login"
                                                    else return "Incorreto, tente novamente!"
                                                },
                                                showCancelButton: true,
                                                cancelButtonText: 'Cancelar',
                                                confirmButtonText: 'Confirmar',
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    
                                                } else {
                                                    swal.fire("Cancelado", {
                                                        icon: "error",
                                                        timer: 1500
                                                    });
                                                }
                                            });
                                        }}
                                        >Log-In</Nav.Link>
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
                        </Container>
                    </Navbar>
                </div>
            </div>
        );
    }
}
