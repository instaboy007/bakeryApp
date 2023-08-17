"use client";
import React, { useState } from 'react';
import {Container, Row, Col } from 'reactstrap';
import styles from '../page.module.css';

export default function HomePage(){
    return (
        <Container fluid className={styles.customcontainer}>
            <Row>
                <Col>
                    <h1>Home</h1>
                </Col>
            </Row>
        </Container>
    )
}