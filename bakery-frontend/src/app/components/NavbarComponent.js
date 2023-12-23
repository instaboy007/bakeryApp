"use client";
import styles from "../page.module.css";
import React, { useState, useContext, useEffect } from "react";
import CartContext from "@/context/CartContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function NavBar({ onLoginClick }) {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <div>
      <Navbar className={styles.navBar} expand={"md"}>
        <NavbarBrand href="/">RK Bakes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="mx-3 my-auto">
              <Link className={styles.navLink} href="/home">
                Home
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link className={styles.navLink} href="/menu">
                Menu
              </Link>
            </NavItem>
            <NavItem className="mx-3 my-auto">
              <Link className={styles.navLink} href="/cart">
                <div className={styles.cartIconContainer}>
                  <FaShoppingCart />
                  {cart?.cartItems?.length > 0 && (
                    <span className={styles.cartBadge}>
                      {cart?.cartItems?.length}
                    </span>
                  )}
                </div>
              </Link>
            </NavItem>
            {user && user.user_id ? (
              <NavItem className="mx-3 my-auto">
                <UncontrolledDropdown>
                  <DropdownToggle nav caret={false}>
                    <FaUser className={styles.navLink} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/* <DropdownItem onClick={()=> router.push("/orders")}>Orders</DropdownItem> */}
                    <DropdownItem onClick={logout}>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            ) : (
              <NavItem className="mx-3 my-auto">
                <a className={styles.navLink} onClick={onLoginClick}>
                  Login
                </a>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
