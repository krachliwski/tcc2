import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './menu.css';
import Logo from '../../images/logo.png';
import swal from 'sweetalert2';

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
                                        <Nav.Link className="Letras" href="/#details">Detalhes do Projeto</Nav.Link>
                                        <Nav.Link className="Letras" //href="login"
                                            onClick={() => {
                                                swal.fire({
                                                    title: "Insira os dados do Supervisor",
                                                    width: 600,
                                                    icon: "warning",
                                                    input: "text",
                                                    inputAttributes: {
                                                        autocapitalize: 'off'
                                                    },
                                                    inputValidator: (input) => {
                                                        if (input == 'ADM')
                                                            swal.fire({
                                                                title: "Insira os dados do Supervisor",
                                                                width: 300,
                                                                icon: "warning",
                                                                input: "password",
                                                                inputAttributes: {
                                                                    autocapitalize: 'off'
                                                                },
                                                                inputValidator: (input) => {
                                                                    if (input == '123')
                                                                        window.location.href = "/login"
                                                                    else
                                                                        return "Incorreto, tente novamente!"
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
                                                        else
                                                            return "Incorreto, tente novamente!"
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
                                        >Entrar</Nav.Link>
                                        <Nav.Link className="Letras" href="login">Cadastrar Vagas</Nav.Link>
                                        <Nav.Link className="Letras" href="parking">Consultar Vagas</Nav.Link>
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
