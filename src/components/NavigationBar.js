import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavigationBar() {

    return (<Navbar className="custom-navbar" expand="lg">
        <Container fluid className="px-4">
        <Navbar.Brand href="/" className="navbar-brand-custom">arnav.pro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/projects">projects</Nav.Link>
            <Nav.Link href="/resume">resume</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>);

}