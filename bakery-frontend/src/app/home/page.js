"use client";
import React, { useState } from 'react';
import {Container, Row, Col, Button,  Card, CardBody, CardTitle, CardText } from 'reactstrap';
import styles from '../page.module.css'
import Image from 'next/image';

export default function Home(){
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
                                <h2 className={styles.mainText} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
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
                <Row style={{paddingTop: '24px', paddingBottom: '24px', justifyContent: 'center'}}>
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
                <Row style={{paddingTop: '24px', paddingBottom: '24px'}}>
                    <Col>
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
                        <Row style={{paddingTop: '24px', justifyContent: 'center'}}>
                            <Col xs="auto">
                                <Button className={styles.customButtonPrimary}>Order Now</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{paddingTop: '24px', paddingBottom: '24px'}}>
                    <Col>
                        <Row style={{justifyContent: 'center', paddingBottom: '24px'}}>
                            <Col>
                                <h1 className={styles.mainText} style={{textAlign: 'center'}}>About Us</h1>
                            </Col>
                        </Row>
                        <Row className={styles.aboutSection}>
                            <Col rounded className={styles.aboutInteriorImage} sm='12' md='6'>
                            </Col>
                            <Col>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                    <Card className={styles.aboutBakeryCard} style={{width: '100%', height: '95%'}}>
                                        <CardBody>
                                            <CardText className={styles.aboutBakeryDescription}>
                                                Welcome to RK Bakes, where passion for baking meets South Indian flavors and traditions. Our journey began with a simple vision – to create irresistible baked goods that bring joy to every bite.
                                                Our story traces back to the vibrant kitchens of South India, where our founder, Veera Raghavan V, discovered a deep-rooted love for baking. What started as a humble experiment soon turned into a culinary adventure, blending the art of baking with the rich tastes of South Indian cuisine.
                                                At RK Bakes, we're not just bakers; we're storytellers. Each recipe carries a piece of our heritage, transforming ingredients into cherished memories. From fragrant cardamom-infused pastries to the softest buttery dosa cakes, every creation is a tribute to our roots.
                                                Our values are as important to us as the ingredients we use. We're committed to quality, ensuring that every product that leaves our ovens is made with the finest, freshest ingredients. Our passion drives us to experiment, innovate, and create the perfect balance between tradition and modernity.
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        <Row className={styles.aboutSection}>
                            <Col xs={{size: 12, order: 2}} sm={{size: 12, order: 2}} md={{size: 6, order: 1}}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                    <Card className={styles.aboutBakeryCard} style={{width: '100%', height: '95%'}}>
                                        <CardBody>
                                            <CardText className={styles.aboutBakeryDescription}>
                                                Meet Veera Rahgavan V, the heart and soul behind RK Bakes. With a lifetime of culinary wisdom and a dash of creativity, Veera brings South Indian flavors to life in every bite. From classic recipes to innovative twists, Veera infuses our bakery with a warmth and authenticity that can only come from a true passion for the craft.
                                                Join us on this delightful journey, where taste is a tradition and every moment is a celebration of flavor. At RK Bakes, baking isn't just a skill – it's an art, a story, and a piece of our South Indian soul.
                                                Discover the magic of RK Bakes – where every bake tells a story.
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col rounded className={styles.aboutOwnerImage} xs={{size: 12, order: 1}} sm={{size: 12, order: 1}} md={{size: 6, order: 2}}>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}