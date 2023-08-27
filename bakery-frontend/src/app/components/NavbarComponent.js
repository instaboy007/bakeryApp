"use client";
import styles from '../page.module.css';
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
            <Navbar className={styles.navBar} {...args} expand={"md"}>
                <NavbarBrand href="/">RK Bakes</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem className="mx-3">
                        <NavLink href="">Home</NavLink>
                    </NavItem>
                    <NavItem className="mx-3">
                        <NavLink href="">
                            Order
                        </NavLink>
                    </NavItem>
                    <NavItem className="mx-3">
                        <NavLink href="">
                            Cart
                        </NavLink>
                    </NavItem>
                    <NavItem className="mx-3">
                        <NavLink href="">
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}