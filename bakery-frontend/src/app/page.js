"use client";

import React, { useState, useContext } from "react";

import styles from "./page.module.css";

import AuthenticationPanel from "./components/AuthenticationPanel";
import LoadingComponent from "./components/Loader";
import NavBar from "./components/NavbarComponent";
import Footer from "./components/FooterComponent";

import AuthContext from "@/context/AuthContext";
import LoadingContext from "@/context/LoadingContext";

export function App({ children }) {
  const { isAuthPanelOpen, openAuthPanel, closeAuthPanel } =
    useContext(AuthContext);

  const {isLoading} = useContext(LoadingContext);

  return (
    <>
      {isLoading ? <LoadingComponent />:""}
      {isAuthPanelOpen && (
        <AuthenticationPanel
          isOpen={isAuthPanelOpen}
          onClose={closeAuthPanel}
        />
      )}
      <div className={`${isAuthPanelOpen || isLoading ? styles.blurOverlay : ""}`}>
        <NavBar onLoginClick={openAuthPanel} />
        {children}
        <Footer />
      </div>
    </>
  );
}
