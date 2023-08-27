"use client";
import React, { useState } from 'react';
import {Container, Row, Col, Button,  Card, CardBody, CardTitle, CardText } from 'reactstrap';
import styles from '../page.module.css';

export default function HomePage(){
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.heroImage}>
                    <div className={styles.heroText}>
                        <h1 className={styles.welcomeText}>Welcome to RK Bakes</h1>
                        <p className={styles.taglineText}>Explore a delightful assortment of our bakery's finest creations.</p>
                        <Button className={styles.customButtonPrimary}>Explore Our Menu</Button>
                    </div>
                </div>
            </div>
            <Container fluid>
                <Row style={{marginTop: '24px', marginBottom: '24px'}}>
                    <Col sm={{size: 12}} md={{size: 4}}>
                        <div >
                            <Row>
                                <Col>
                                    <h2 className={styles.mainText}>
                                        <span className={styles.subText}>
                                            IN THE &nbsp;&nbsp;
                                        </span>
                                        KITCHEN
                                    </h2>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className='d-none d-md-block' md="8" style={{marginTop: 'auto !important', marginBottom: 'auto !important'}}>
                        <hr className={styles.horizontalLine}/>
                    </Col>
                </Row>
                <Row style={{marginTop: '24px', marginBottom: '24px'}}>
                    <Col xs='6' sm='6' md='4' lg='3' style={{display: 'flex', justifyContent: 'center' }}>
                            <Card style={{width: '15rem',marginTop: '5%'}}>
                                <img
                                    alt="Card"
                                    src="https://picsum.photos/300/200"
                                />
                            </Card>
                    </Col>
                    <Col  xs='6' sm='6' md='4' lg='3' style={{display: 'flex', justifyContent: 'center'}}>
                        <Card style={{width: '15rem',marginTop: '5%'}}>
                            <img
                                alt="Card"
                                src="https://picsum.photos/300/200"
                            />
                        </Card>
                    </Col>
                    <Col xs='6' sm='6' md='4' lg='3' style={{display: 'flex', justifyContent: 'center'}}>
                        <Card style={{width: '15rem',marginTop: '5%'}}>
                            <img
                                alt="Card"
                                src="https://picsum.photos/300/200"
                            />
                        </Card>
                    </Col>
                    <Col xs='6' sm='6' md='4' lg='3' style={{display: 'flex', justifyContent: 'center'}}>
                        <Card style={{width: '15rem',marginTop: '5%'}}>
                            <img
                                alt="Card"
                                src="https://picsum.photos/300/200"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop: '24px', marginBottom: '24px'}}>
                    <Col className='d-none d-md-block' md="8" style={{marginTop: 'auto !important', marginBottom: 'auto !important'}}>
                        <hr className={styles.horizontalLine}/>
                    </Col>
                    <Col sm={{size: 12}} md={{size: 4}}>
                        <Row>
                            <Col>
                                <h2 className={styles.mainText}>
                                    <span className={styles.subText}>
                                        IN &nbsp;&nbsp;
                                    </span>
                                    SEASON
                                </h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop: '24px', marginBottom: '24px'}}>
                    <Col xs='6' sm='6' md='4' lg='3' style={{display: 'flex', justifyContent: 'center' }}>
                        <Card style={{width: '15rem',marginTop: '5%'}}>
                            <img
                                alt="Card"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                Card Title
                                </CardTitle>
                                <CardText>
                                This is some text within a card body.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col  xs='6' sm='6' md='4' lg='3' style={{display: 'flex', justifyContent: 'center'}}>
                        <Card style={{width: '15rem',marginTop: '5%'}}>
                            <img
                                alt="Card"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                Card Title
                                </CardTitle>
                                <CardText>
                                This is some text within a card body.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs='6' sm='6' md='4' lg='3' style={{display: 'flex', justifyContent: 'center'}}>
                        <Card style={{width: '15rem',marginTop: '5%'}}>
                            <img
                                alt="Card"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                Card Title
                                </CardTitle>
                                <CardText>
                                This is some text within a card body.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs='6' sm='6' md='4' lg='3' style={{display: 'flex', justifyContent: 'center'}}>
                        <Card style={{width: '15rem',marginTop: '5%'}}>
                            <img
                                alt="Card"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                Card Title
                                </CardTitle>
                                <CardText>
                                This is some text within a card body.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
        
           
    )
}