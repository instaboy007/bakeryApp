"use client";
import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../page.module.css";
import CartContext from "@/context/CartContext";
import { useRouter } from "next/navigation";
import LoadingContext from '@/context/LoadingContext';


export default function Cart() {
  const {
    addItemToCart,
    deleteItemFromCart,
    isItemInCart,
    incrementItemQuantity,
    decrementItemQuantity,
    cart,
  } = useContext(CartContext);

  const {isLoading, setIsLoading} = useContext(LoadingContext);

  useEffect(()=>{
    if(!cart){
      setIsLoading(true)
    }
    setIsLoading(false)

  },[cart])

  const addToCartHandler = (item) => {
    addItemToCart({
      product: item,
    });
  };

  const deleteItemFromCartHandler = (itemName) => {
    deleteItemFromCart(itemName);
  };

  const isItemInCartHandler = (itemName) => {
    return isItemInCart(itemName);
  };

  const itemTotal = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  const deliveryFee = (40).toFixed(2);

  const platformFee = (5).toFixed(2);

  const packagingFee = (35).toFixed(2);

  const GST = (itemTotal * 0.15).toFixed(2);

  const GSTonPlatformFee = (platformFee * 0.18).toFixed(2);

  const grandTotal =
    Number(itemTotal) +
    Number(deliveryFee) +
    Number(platformFee) +
    Number(packagingFee) +
    Number(GST) +
    Number(GSTonPlatformFee);

  const router = useRouter(); // Initialize the history object

  return (
    <Container fluid style={{ paddingTop: "24px", paddingBottom: "24px" }}>
      {cart?.cartItems?.length > 0 ? (
        <Row
          className={styles.menuRow}
          style={{
            marginLeft: "24px",
            marginRight: "24px",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <Col xs={{ size: 8 }}>
            <Row>
              <Col xs="12" className={styles.itemsSection}>
                <Row
                  className={styles.itemList}
                  style={{ justifyContent: "center" }}
                >
                  <Col style={{ overflowY: "scroll", height: "83vh" }}>
                    {cart?.cartItems?.map((item) => (
                      <Row className="my-3">
                        <Col xs={{ size: 12 }}>
                          <Card
                            key={item.product.name}
                            className={styles.customSeasonCard}
                            style={{ width: "100" }}
                          >
                            <CardBody>
                              <Row>
                                <Col xs="2" sm="2" md="2" className="my-auto">
                                  <img
                                    alt="Card"
                                    className={`${styles.seasonDishImage} img img-fluid rounded-circle`}
                                    src={item.product.image}
                                    style={{ width: "4rem" }}
                                  />
                                </Col>
                                <Col xs="3" sm="3" md="3" className="my-auto">
                                  <Row>
                                    <Col>
                                      <CardTitle
                                        className={styles.seasonDishName}
                                        tag="h3"
                                        style={{ fontSize: "0.9rem" }}
                                      >
                                        {item.product.name}
                                      </CardTitle>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col xs="2" sm="2" md="2" className="my-auto">
                                  <Row
                                    style={{
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Col>
                                      <CardTitle
                                        className={styles.seasonDishName}
                                        tag="h3"
                                        style={{ fontSize: "0.9rem" }}
                                      >
                                        <span className="me-2">&#8377;</span>
                                        {(
                                          item.product.price * item.quantity
                                        ).toFixed(2)}
                                      </CardTitle>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col xs="3" sm="3" md="3" className="my-auto">
                                  <Row
                                    style={{
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Col className="d-flex justify-content-center">
                                      <div className={styles.countIncrementer}>
                                        <Button
                                          className={styles.countButton}
                                          onClick={() =>
                                            decrementItemQuantity(
                                              item.product.name
                                            )
                                          }
                                        >
                                          -
                                        </Button>
                                        <span className={styles.count}>
                                          {item.quantity}
                                        </span>
                                        <Button
                                          className={styles.countButton}
                                          onClick={() =>
                                            incrementItemQuantity(
                                              item.product.name
                                            )
                                          }
                                        >
                                          +
                                        </Button>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col xs="2" sm="2" md="2" className="my-auto">
                                  <Row
                                    style={{
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Col className="d-flex justify-content-center">
                                      <Button
                                        className={styles.customButtonSecondary}
                                        onClick={() =>
                                          deleteItemFromCartHandler(
                                            item.product.name
                                          )
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={{ size: 4 }}>
            <Card
              style={{ width: "100", height: "83vh" }}
              className={styles.customSeasonCard}
            >
              <CardBody style={{ padding: "24px" }}>
                <Row>
                  <Col>
                    <CardTitle
                      className={styles.seasonDishName}
                      tag="h3"
                      style={{ fontSize: "1rem" }}
                    >
                      Bill Details
                    </CardTitle>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <hr
                      className={styles.horizontalLine}
                      style={{
                        color: "#AD735C",
                        height: "1px",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardTitle
                      className={styles.seasonDishName}
                      tag="h3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Item Total
                    </CardTitle>
                  </Col>
                  <Col>
                    <p className={styles.billPrice}>
                      <span className="me-2">&#8377;</span>
                      {itemTotal}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardTitle
                      className={styles.seasonDishName}
                      tag="h3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Delivery Fee
                    </CardTitle>
                  </Col>
                  <Col>
                    <p className={styles.billPrice}>
                      <span className="me-2">&#8377;</span>
                      {deliveryFee}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardTitle
                      className={styles.seasonDishName}
                      tag="h3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Platform Fee
                    </CardTitle>
                  </Col>
                  <Col>
                    <p className={styles.billPrice}>
                      <span className="me-2">&#8377;</span>
                      {platformFee}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardTitle
                      className={styles.seasonDishName}
                      tag="h3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Packaging
                    </CardTitle>
                  </Col>
                  <Col>
                    <p className={styles.billPrice}>
                      <span className="me-2">&#8377;</span>
                      {packagingFee}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardTitle
                      className={styles.seasonDishName}
                      tag="h3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      GST
                    </CardTitle>
                  </Col>
                  <Col>
                    <p className={styles.billPrice}>
                      <span className="me-2">&#8377;</span>
                      {GST}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardTitle
                      className={styles.seasonDishName}
                      tag="h3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      GST on Platform Fee
                    </CardTitle>
                  </Col>
                  <Col>
                    <p className={styles.billPrice}>
                      <span className="me-2">&#8377;</span>
                      {GSTonPlatformFee}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CardTitle
                      className={styles.seasonDishName}
                      tag="h3"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Grand Total
                    </CardTitle>
                  </Col>
                  <Col>
                    <p className={styles.billPrice}>
                      <span className="me-2">&#8377;</span>
                      {grandTotal}
                    </p>
                  </Col>
                </Row>
                <Row style={{ display: "flex", alignItems: "end" }}>
                  <Col>
                    <Row>
                      <Col>
                        <Button
                          className={`${styles.customButtonTertiary} d-flex w-100 justify-content-center`}
                          onClick={() => router.push("/payment")}
                        >
                          Proceed to Pay
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <Button
                          className={`${styles.customButtonSecondary} d-flex w-100 justify-content-center`}
                          onClick={()=> router.push('/menu')}
                        >
                          Back to Menu
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row style={{ height: "90vh" }}>
          <Col style={{display: "flex",flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <FaShoppingCart className={styles.emptyCartIcon} />
            <Link href="/menu">
              
              <Button className={styles.customButtonSecondary}>Cart is Empty ! Go Back to Menu</Button>
            </Link>
          </Col>
        </Row>
      )}
    </Container>
  );
}
