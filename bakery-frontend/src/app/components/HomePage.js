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
                <Row style={{paddingTop: '24px', paddingBottom: '24px'}}>
                    <Col sm={{size: 12}} md={{size: 4}}>
                        <Row>
                            <Col>
                                <h2 className={styles.mainText} style={{textAlign: 'end', display: 'flex', alignItems: 'center'}}>
                                    <span className={styles.subText}>
                                        IN MY &nbsp;&nbsp;
                                    </span>
                                    KITCHEN
                                </h2>
                            </Col>
                        </Row>
                    </Col>
                    <Col className='d-none d-md-block' md="8" style={{marginTop: 'auto !important', marginBottom: 'auto !important'}}>
                        <hr className={styles.horizontalLine}/>
                    </Col>
                </Row>
                <Row style={{paddingTop: '24px', paddingBottom: '24px', display: 'flex', justifyContent: 'center'}}>
                    <Col xs='auto' sm='auto' md='auto' lg='1' style={{paddingTop: '24px', paddingBottom: '24px' }}>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <Card className={styles.customKitchenCard} style={{width: '5rem',height: '5rem',marginTop: '5%', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img
                                    alt="Bread"
                                    src="./home/icons8-bread-64.png"
                                    height="52px"
                                    width="52px"
                                />
                            </Card>
                        </div>
                        <h2 className={styles.kitchenCardLabel}>Breads</h2>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='1' style={{paddingTop: '24px', paddingBottom: '24px'}}>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <Card className={styles.customKitchenCard} style={{width: '5rem',height: '5rem',marginTop: '5%', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img
                                    alt="Bread"
                                    src="./home/icons8-cake-100.png"
                                    height="52px"
                                    width="52px"
                                />
                            </Card>
                        </div>
                        <h2 className={styles.kitchenCardLabel}>Pastries</h2>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='1' style={{paddingTop: '24px', paddingBottom: '24px' }}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Card className={styles.customKitchenCard} style={{width: '5rem',height: '5rem',marginTop: '5%', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img
                                    alt="Bread"
                                    src="./home/icons8-cake-66.png"
                                    height="52px"
                                    width="52px"
                                />
                            </Card>
                        </div>
                        <h2 className={styles.kitchenCardLabel}>Cakes</h2>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='1' style={{paddingTop: '24px', paddingBottom: '24px'}}>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <Card className={styles.customKitchenCard} style={{width: '5rem',height: '5rem',marginTop: '5%', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img
                                    alt="Bread"
                                    src="./home/icons8-cupcake-64.png"
                                    height="52px"
                                    width="52px"
                                />
                            </Card>
                        </div>
                        <h2 className={styles.kitchenCardLabel}>Cupcakes</h2>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='1' style={{paddingTop: '24px', paddingBottom: '24px'}}>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <Card className={styles.customKitchenCard} style={{width: '5rem',height: '5rem',marginTop: '5%', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img
                                    alt="Bread"
                                    src="./home/icons8-cookie-64.png"
                                    height="52px"
                                    width="52px"
                                />
                            </Card>
                        </div>
                        <h2 className={styles.kitchenCardLabel}>Cookies</h2>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='1' style={{paddingTop: '24px', paddingBottom: '24px'}}>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <Card className={styles.customKitchenCard} style={{width: '5rem',height: '5rem',marginTop: '5%', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img
                                    alt="Bread"
                                    src="./home/icons8-chocolate-100.png"
                                    height="52px"
                                    width="52px"
                                />
                            </Card>
                        </div>
                        <h2 className={styles.kitchenCardLabel}>Chocolates</h2>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='1' style={{paddingTop: '24px', paddingBottom: '24px'}}>
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <Card className={styles.customKitchenCard} style={{width: '5rem',height: '5rem',marginTop: '5%', padding: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img
                                    alt="Bread"
                                    src="./home/icons8-doughnut-100.png"
                                    height="52px"
                                    width="52px"
                                />
                            </Card>
                        </div>
                        <h2 className={styles.kitchenCardLabel}>Doughnuts</h2>
                    </Col>
                </Row>
                <Row style={{paddingTop: '24px', paddingBottom: '24px'}}>
                    <Col className='d-none d-md-block' md="8" style={{marginTop: 'auto !important', marginBottom: 'auto !important'}}>
                        <hr className={styles.horizontalLine}/>
                    </Col>
                    <Col sm={{size: 12}} md={{size: 4}}>
                        <Row>
                            <Col>
                                <h2 className={styles.mainText} style={{display: 'flex', alignItems: 'center'}}>
                                    <span className={styles.subText}>
                                        IN &nbsp;&nbsp;
                                    </span>
                                    SEASON
                                </h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{paddingTop: '24px', paddingBottom: '24px', justifyContent: 'center'}}>
                    <Col xs='auto' sm='auto' md='auto' lg='auto' >
                        <div style={{display: 'flex', justifyContent: 'center' }}>
                            <Card style={{width: '12rem',marginTop: '5%'}}>
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
                        </div>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='auto'>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Card style={{width: '12rem',marginTop: '5%'}}>
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
                        </div>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='auto' >
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Card style={{width: '12rem',marginTop: '5%'}}>
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
                        </div>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='auto'>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Card style={{width: '12rem',marginTop: '5%'}}>
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
                        </div>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='auto'>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Card style={{width: '12rem',marginTop: '5%'}}>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
        
           
    )
}