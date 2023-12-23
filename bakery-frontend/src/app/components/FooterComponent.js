"use client";
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from '../page.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} style={{paddingTop: '24px', paddingBottom: '24px' }}>
      <Container>
        <Row>
          <Col md="6">
            <h4>Contact Us</h4>
            <div className={styles.contactInfo}>
              <p style={{display: 'flex', alignItems: 'center'}}><FaMapMarkerAlt/> <span className="ms-2">Address: 123 Bakery Street, Cityville, Country</span></p>
              <p style={{display: 'flex', alignItems: 'center'}}><BsFillTelephoneFill/> <span className="ms-2">Phone: +123 456 7890</span></p>
              <p style={{display: 'flex', alignItems: 'center'}}><FaEnvelope/> <span className="ms-2">Email: info@rkbakes.com</span></p>
            </div>
          </Col>
          <Col md="6">
            <h4>Stay Connected</h4>
            <div className={styles.socialIcons}>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram className='mx-5'/></a>
              <a href="#"><FaTwitter/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;