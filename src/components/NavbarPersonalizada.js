import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import logo from '../imgs/logo_classificado_2.png'
import '../css/navbarpersonalizada.css'
import { FaRegUser } from "react-icons/fa";


function NavbarPersonalizada() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container> 
        <img src={logo} className='logo'/>
      </Container>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav" className='colapse'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#anuncios">Anuncios</Nav.Link>
            <Nav.Link href="#anuncios">Categorias</Nav.Link>
            <div className='container'>
              <FaRegUser className='user-picture'/>
              <NavDropdown title="Registre-se" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Cadastre-se</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPersonalizada;