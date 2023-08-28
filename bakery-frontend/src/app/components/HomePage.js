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
                                        In my &nbsp;
                                    </span>
                                    Kitchen
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
                                        In &nbsp;
                                    </span>
                                    Season
                                </h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{paddingTop: '24px', paddingBottom: '24px', justifyContent: 'center'}}>
                    <Col xs='auto' sm='auto' md='auto' lg='auto' >
                        <div style={{display: 'flex', justifyContent: 'center', height: '100% !important' }}>
                            <Card className={styles.customSeasonCard} style={{width: '12rem',marginTop: '5%'}}>
                                <img
                                    alt="Card"
                                    src="home/chocolateFudgeCake.png"
                                />
                                <CardBody>
                                    <CardTitle className={styles.seasonDishName} tag="h5">
                                    Chocolate Fudge Cake
                                    </CardTitle>
                                    <CardText className={styles.seasonDishDescription}>
                                    Rich layers, velvety fudge, pure bliss.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='auto'>
                        <div style={{display: 'flex', justifyContent: 'center', height: '100% !important'}}>
                            <Card className={styles.customSeasonCard} style={{width: '12rem',marginTop: '5%'}}>
                                <img
                                    alt="Card"
                                    src="home/croissantDelight.png"
                                />
                                <CardBody>
                                    <CardTitle className={styles.seasonDishName} tag="h5">
                                    Croissant Delight
                                    </CardTitle>
                                    <CardText className={styles.seasonDishDescription}>
                                    Flaky perfection, buttery delight.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='auto' >
                        <div style={{display: 'flex', justifyContent: 'center', height: '100% !important'}}>
                            <Card className={styles.customSeasonCard} style={{width: '12rem',marginTop: '5%'}}>
                                <img
                                    alt="Card"
                                    src="home/berryBlissCupcake.png"
                                />
                                <CardBody>
                                    <CardTitle className={styles.seasonDishName} tag="h5">
                                    Berry Bliss Cupcake
                                    </CardTitle>
                                    <CardText className={styles.seasonDishDescription}>
                                    Bursting berries, heavenly sweetness.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='auto'>
                        <div style={{display: 'flex', justifyContent: 'center', height: '100% !important'}}>
                            <Card className={styles.customSeasonCard} style={{width: '12rem',marginTop: '5%'}}>
                                <img
                                    alt="Card"
                                    src="home/artisanBaguette.png"
                                />
                                <CardBody>
                                    <CardTitle className={styles.seasonDishName} tag="h5">
                                    Artisan Baguette
                                    </CardTitle>
                                    <CardText className={styles.seasonDishDescription}>
                                    Golden crust, soft interior, perfection.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col xs='auto' sm='auto' md='auto' lg='auto'>
                        <div style={{display: 'flex', justifyContent: 'center', height: '100% !important'}}>
                            <Card className={styles.customSeasonCard} style={{width: '12rem',marginTop: '5%'}}>
                                <img
                                    alt="Card"
                                    src="home/lemonZestMacaron.png"
                                />
                                <CardBody>
                                    <CardTitle className={styles.seasonDishName} tag="h5">
                                    Lemon Zest Macaron
                                    </CardTitle>
                                    <CardText className={styles.seasonDishDescription}>
                                    Zesty elegance, Parisian delight.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row style={{paddingTop: '24px', paddingBottom: '24px', justifyContent: 'center'}}>
                    <Col>
                        <h1 style={{textAlign: 'center'}}>About</h1>
                    </Col>
                </Row>
            </Container>
        </>
        
           
    )
}