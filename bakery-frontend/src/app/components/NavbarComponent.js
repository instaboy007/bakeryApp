"use client";
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

export default function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar {...args} expand={"md"}>
            <NavbarBrand href="/">RK Bakes</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink href="">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="">
                        Order
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="">
                        Login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="">
                        Cart
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}