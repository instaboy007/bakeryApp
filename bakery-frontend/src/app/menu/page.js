"use client";
import React, { useState } from 'react';
import {Container, Row, Col, Button,  Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import { FaLeaf, FaDrumstickBite, FaShoppingCart } from 'react-icons/fa';
import styles from '../page.module.css'
import Image from 'next/image';

const categories = [
    'Breads',
    'Pastries',
    'Cakes',
    'Cupcakes',
    'Cookies',
    'Chocolates',
    'Doughnuts',
];

  
const itemsByCategory = {
    Breads: [
        {
            name: 'Naan',
            description: 'A soft and fluffy Indian bread, traditionally baked in a tandoor.',
            price: 30,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Roti',
            description: 'A simple unleavened Indian bread made from whole wheat flour.',
            price: 10,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Paratha',
            description: 'A flaky and layered Indian bread often stuffed with various fillings.',
            price: 40,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Pav',
            description: 'A soft bun used for making popular dishes like vada pav and pav bhaji.',
            price: 15,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Bhatura',
            description: 'A deep-fried bread that pairs well with spicy curries like chole.',
            price: 25,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        }
    ],
    Pastries: [
        {
            name: 'Pineapple Pastry',
            description: 'A light and fluffy pastry with layers of sponge cake and pineapple filling.',
            price: 60,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Chocolate Eclair',
            description: 'A classic pastry filled with vanilla cream and topped with chocolate glaze.',
            price: 50,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Black Forest Pastry',
            description: 'A decadent pastry with layers of chocolate sponge cake, whipped cream, and cherries.',
            price: 70,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Mango Mousse Pastry',
            description: 'A delightful pastry featuring layers of mango-flavored mousse and sponge cake.',
            price: 65,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Strawberry Shortcake',
            description: 'A pastry filled with fresh strawberries and whipped cream on a light cake base.',
            price: 55,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        }
    ],
    Cakes: [
        {
            name: 'Black Forest Cake',
            description: 'A classic cake featuring layers of chocolate sponge, whipped cream, and cherries.',
            price: 600,
            weight: '1 kg',
            veg: true,
            serves: '8-10',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Pineapple Cake',
            description: 'A delightful cake with layers of vanilla sponge and pineapple filling.',
            price: 550,
            weight: '1 kg',
            veg: true,
            serves: '8-10',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Red Velvet Cake',
            description: 'A visually stunning cake with red velvet sponge and cream cheese frosting.',
            price: 650,
            weight: '1 kg',
            veg: true,
            serves: '8-10',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Chocolate Truffle Cake',
            description: 'A rich chocolate cake layered with chocolate ganache and decorated with truffles.',
            price: 700,
            weight: '1 kg',
            veg: true,
            serves: '8-10',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Mango Cream Cake',
            description: 'A seasonal treat featuring layers of fresh mango and cream on a sponge cake.',
            price: 600,
            weight: '1 kg',
            veg: true,
            serves: '8-10',
            image: 'home/chocolateFudgeCake.png'
        }
    ],
    Cupcakes: [
        {
            name: 'Chocolate Cupcake',
            description: 'A rich chocolate-flavored cupcake topped with creamy chocolate frosting.',
            price: 40,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Vanilla Cupcake',
            description: 'A classic vanilla cupcake with smooth vanilla frosting.',
            price: 35,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Red Velvet Cupcake',
            description: 'A delightful red velvet cupcake with cream cheese frosting.',
            price: 45,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Strawberry Cupcake',
            description: 'A sweet strawberry-flavored cupcake topped with luscious strawberry frosting.',
            price: 40,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Lemon Cupcake',
            description: 'A tangy lemon-flavored cupcake with zesty lemon frosting.',
            price: 35,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        }
    ],
    Cookies: [
        {
            name: 'Chocolate Chip Cookie',
            description: 'A classic cookie with chunks of chocolate chips baked into a soft dough.',
            price: 20,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Butter Shortbread Cookie',
            description: 'A buttery and crumbly shortbread cookie that melts in your mouth.',
            price: 25,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Oatmeal Raisin Cookie',
            description: 'A wholesome cookie with oats and raisins, perfect for a nutritious treat.',
            price: 20,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Coconut Macaroon',
            description: 'A chewy coconut cookie with a delicate outer crust and sweet flavor.',
            price: 30,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Almond Biscotti',
            description: 'A twice-baked almond cookie, great for dipping into your favorite beverage.',
            price: 25,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        }
    ],
    Chocolates: [
        {
            name: 'Dark Chocolate',
            description: 'A rich and intense chocolate with a high cocoa content and bittersweet flavor.',
            price: 100,
            weight: '100g',
            veg: true,
            serves: 'Varies',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Milk Chocolate',
            description: 'A smooth and creamy chocolate made with milk, loved by all ages.',
            price: 90,
            weight: '100g',
            veg: true,
            serves: 'Varies',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'White Chocolate',
            description: 'A sweet and vanilla-flavored chocolate made with cocoa butter and milk solids.',
            price: 110,
            weight: '100g',
            veg: true,
            serves: 'Varies',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Hazelnut Praline',
            description: 'A delightful chocolate with a hazelnut filling and a crunchy praline layer.',
            price: 120,
            weight: '100g',
            veg: true,
            serves: 'Varies',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Fruit & Nut Chocolate',
            description: 'A chocolate loaded with dried fruits and nuts, offering a delightful crunch.',
            price: 95,
            weight: '100g',
            veg: true,
            serves: 'Varies',
            image: 'home/chocolateFudgeCake.png'
        }
    ],
    Doughnuts: [
        {
            name: 'Glazed Doughnut',
            description: 'A classic ring-shaped doughnut covered with a sweet and glossy glaze.',
            price: 30,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Chocolate Doughnut',
            description: 'A chocolate-flavored doughnut with chocolate glaze and toppings.',
            price: 35,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Jelly-Filled Doughnut',
            description: 'A soft doughnut filled with fruity jelly or jam, dusted with powdered sugar.',
            price: 40,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Boston Cream Doughnut',
            description: 'A cream-filled doughnut with chocolate glaze, resembling a mini cake.',
            price: 45,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        },
        {
            name: 'Cinnamon Sugar Doughnut',
            description: 'A doughnut coated in a delightful mix of cinnamon and sugar.',
            price: 30,
            quantity: 'Each',
            veg: true,
            serves: '1 piece',
            image: 'home/chocolateFudgeCake.png'
        }
    ]
};
  

export default function Menu(){
    const [selectedCategory, setSelectedCategory] = useState('Breads');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
  
    return (
        <Container fluid className={styles.menuContainer}>
            <Row className={styles.menuRow}>
                <Col>
                    <Row style={{paddingTop: '24px', paddingBottom: '24px'}}>
                        <Col xs='4' sm='4' md="3">
                            <h1 className={styles.ourMenuText}>Our Menu</h1>
                        </Col>
                        <Col xs='8' sm='8' md="9">
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{height: '100vh', position: 'sticky'}} xs='4' sm='4' md="3">
                            <ListGroup className={styles.categoryList}>
                                {categories.map((category) => (
                                    <ListGroupItem
                                        key={category}
                                        className={`${styles.categoryItem} ${selectedCategory === category ? styles.active : ''}`}
                                        onClick={() => handleCategoryClick(category)}
                                        >
                                        <h3 className={styles.categoryName}>{category}</h3>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col xs='8' sm='8' md="9">
                            <Row className={styles.itemList} style={{justifyContent: 'center'}}>
                                <Col>
                                    <Row>
                                        {itemsByCategory[selectedCategory].map((item) => (
                                            <Col xs='auto' key={item.name} className={styles.item} style={{paddingTop: '24px', paddingBottom: '24px', justifyContent: 'center !important'}}>
                                                <Card className={styles.customSeasonCard} style={{width: '15rem',height: '100%'}}>
                                                    <img
                                                        alt="Card"
                                                        src={item.image}
                                                    />
                                                    <CardBody>
                                                        <CardTitle className={styles.seasonDishName} tag="h5">
                                                            {item.name}
                                                        </CardTitle>
                                                        <Row className={styles.seasonDishDescription}>
                                                            <div>
                                                                <span>
                                                                    {item.veg ? <FaLeaf className={styles.vegIcon} /> : <FaDrumstickBite className={styles.nonVegIcon} />}
                                                                    {item.veg ? ' Veg' : ' Non Veg'}
                                                                </span>
                                                                <span>
                                                                    &nbsp;<span className={styles.dot}></span>&nbsp; Serves: {item.serves}
                                                                </span>
                                                            </div>
                                                            <h3 style={{ marginTop: '8px' }} className={styles.itemPrice}>
                                                                <span>&#8377;</span>
                                                                {item.price}
                                                            </h3>
                                                            <p className={styles.itemDescription}>{item.description}</p>
                                                        </Row>
                                                        <Row style={{justifyContent: 'center'}}>
                                                            <Col>
                                                                <Button style={{ width: '95%' }} className={styles.customButtonSecondary}>
                                                                    Add to Cart <FaShoppingCart />
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>                   
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}