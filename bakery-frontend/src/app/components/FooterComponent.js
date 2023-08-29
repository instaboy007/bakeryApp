"use client";
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from '../page.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} style={{marginTop: '24px', paddingTop: '24px', paddingBottom: '24px' }}>
      <Container>
        <Row>
          <Col md="6">
            <h4>Contact Us</h4>
            <div className={styles.contactInfo}>
              <p><FaMapMarkerAlt /> Address: 123 Bakery Street, Cityville, Country</p>
              <p><FaPhone /> Phone: +123 456 7890</p>
              <p><FaEnvelope /> Email: info@rkbakes.com</p>
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