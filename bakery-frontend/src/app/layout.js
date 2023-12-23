"use client";

import React, { useState, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

import { GlobalProvider } from "./GlobalProvider";
import AuthenticationPanel from "./components/AuthenticationPanel";
import NavBar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";
import { App } from "./page";

const inter = Inter({ subsets: ["latin"] });

import AuthContext from "@/context/AuthContext";
import CartContext from "@/context/CartContext";

export const metadata = {
  title: "RK Bakes",
  description: "Delight in Every Bite, Exclusively from RK Bakes!",
};

export default function RootLayout({ children }) {

  // const {isAuthPanelOpen, openAuthPanel, closeAuthPanel} = useContext(AuthContext);

  const [isAuthPanelOpen, setIsAuthPanelOpen] = useState(false);

  const openAuthPanel = () => {
    setIsAuthPanelOpen(true);
  };

  const closeAuthPanel = () => {
    setIsAuthPanelOpen(false);
  };


  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <App children={children}></App>
          {/* {isAuthPanelOpen && (
            <AuthenticationPanel
              isOpen={isAuthPanelOpen}
              onClose={closeAuthPanel}
            />
          )}
          <div className={`${isAuthPanelOpen ? styles.blurOverlay : ""}`}>
            <NavBar onLoginClick={openAuthPanel} />
            {children}
            <Footer />
          </div> */}
        </GlobalProvider>
      </body>
    </html>
  );
}
