
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png'
import useAuth from '../hooks/useAuth';

import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const LogOutButton = () => {
        logOut();
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img src={Logo} className="logo" alt="" /> Tour Internatinal Ltd.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="destinations">Destinations</Nav.Link>
                            <Nav.Link as={Link} to="/hotdeals">Hot Deals</Nav.Link>
                            <Nav.Link as={Link} to="/meetus">Meet us</Nav.Link>
                        </Nav>

                        <Nav>

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/manageallorders" >Manage All Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addnewdestination" >Add New Destination</NavDropdown.Item>




                            </NavDropdown>

                            <Nav.Link as={Link} to="/userorderlist">User Order list</Nav.Link>
                            {
                                user.email &&
                                < Nav.Link > Hi ! {user.displayName}</Nav.Link>
                            }
                            {
                                user.email ?
                                    <Nav.Link onClick={LogOutButton} as={Button}>Log Out</Nav.Link> :
                                    <Nav.Link as={Link} to="/login" >Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div >
    );
};

export default Header;