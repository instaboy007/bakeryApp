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
import {FaShoppingCart} from 'react-icons/fa';
import Link from 'next/link';

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
                        <Link className={styles.navLink} href="/home">Home</Link>
                    </NavItem>
                    <NavItem className="mx-3">
                        <Link className={styles.navLink} href="/menu">
                            Menu
                        </Link>
                    </NavItem>
                    <NavItem className="mx-3">
                        <Link className={styles.navLink} href="/cart">
                            <FaShoppingCart />
                        </Link>
                    </NavItem>
                    <NavItem className="mx-3">
                        <Link className={styles.navLink} href="/login">
                            Login
                        </Link>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}