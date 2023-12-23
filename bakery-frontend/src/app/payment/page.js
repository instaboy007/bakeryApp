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
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback
} from "reactstrap";
import styles from "../page.module.css";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import AuthContext from "@/context/AuthContext";
import StickyCartFooter from "../components/CartFooter";
import AuthenticationPanel from "../components/AuthenticationPanel";
import LoadingContext from '@/context/LoadingContext';


import { FaCheckCircle, FaMoneyBill } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Payment() {
  const router = useRouter();

  const { cart, grandTotal, clearCart } = useContext(CartContext);
  const { user, userDetails, getUserDetails, createOrder } = useContext(AuthContext);

  const [isAddressAvailable, setAddressAvailable] = useState(false);

  const {isLoading, setIsLoading} = useContext(LoadingContext);


  const [formData, setFormData] = useState({
    address: ""
  });

  const [errors, setErrors] = useState({
    address: "",
  });

  useEffect(() => {
    if(user){
      getUserDetails(user.user_id)
    }
  }, [user]);

  useEffect(()=>{}, [userDetails]);

  const handleAddress = () => {
    if (!isAddressAvailable) {
      setAddressAvailable(true);
    }
  };

  const handlePayment = () => {
    setIsLoading(true);
    const data = {
      user_id: user.user_id,
      address: formData.address,
      cart: cart,
      amount: grandTotal,
      delivery_status: 'Pending',
      payment_mode: selectedOption,
    }
    console.log(data);
    createOrder(data.user_id, data.address, data.cart, data.amount, data.delivery_status, data.payment_mode); 
    setIsLoading(false);
    alert("Order Successfull")
    clearCart();
    router.push("/home");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Perform validation
    if (name === "address") {
      if(value.length === 0 || value === ""){
        setErrors({
          ...errors,
          address: "Address can't be empty",
        });
      }else {
        setErrors({
          ...errors,
          address: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.address.length === 0){
      setErrors({
        ...errors,
        address: "Address can't be empty",
      })
    }
    else{
      console.log("Form submitted successfully", formData);
      if(errors.address.length === 0){
        handleAddress();
      }
    }
  };

  const [selectedOption, setSelectedOption] = useState("cash"); // 'cash' or 'gpay'

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const { openAuthPanel, isAuthPanelOpen, closeAuthPanel } =
    useContext(AuthContext);

  return (
    <>
      <Container fluid className={`${styles.menuContainer} ${styles.paymentContainer}`}>
        <Row className={styles.menuRow}>
          <Col xs={{ size: 10, offset: 1 }}>
            <Row style={{ marginTop: "24px" }}>
              <Col>
                <Card className={styles.paymentCard}>
                  {user && userDetails? (
                    <CardBody className="my-auto">
                      <CardTitle className={styles.paymentCardTitle}>
                        Logged In
                        <span className="ms-3 my-auto py-auto">
                          <FaCheckCircle style={{ color: "green" }} />
                        </span>
                      </CardTitle>
                      <CardText>
                        {userDetails.email} | {userDetails.phone_number}
                      </CardText>
                    </CardBody>
                  ) : (
                    <CardBody>
                      <CardTitle className={styles.paymentCardTitle}>
                        Account
                      </CardTitle>
                      <CardText>
                        To Place your order now Log in to your existing account
                        or signup
                      </CardText>
                      <Button
                        className={styles.customButtonSecondary}
                        onClick={openAuthPanel}
                      >
                        Have an Account ? Login
                      </Button>
                    </CardBody>
                  )}
                </Card>
              </Col>
            </Row>
            <Row style={{ marginTop: "24px" }}>
              <Col>
                <Card className={styles.paymentCard}>
                  {user ? (
                    isAddressAvailable ? (
                      <CardBody>
                        <CardTitle className={styles.paymentCardTitle}>
                          Delivery Address
                        </CardTitle>
                        <CardText>
                          {formData.address}
                        </CardText>
                        <Button
                          className={styles.customButtonSecondary}
                          onClick={()=>setAddressAvailable(false)}
                        >
                          Edit
                        </Button>
                      </CardBody>
                    ) : (
                      <CardBody>
                        <CardTitle className={styles.paymentCardTitle}>
                          Delivery Address
                        </CardTitle>
                        <CardText>Enter Delivery Address</CardText>
                        <Form onSubmit={handleSubmit}>
                          <FormGroup floating>
                            <Input
                              id="address"
                              name="address"
                              placeholder="Address"
                              type="text"
                              value={formData.address}
                              onChange={handleChange}
                              invalid={!!errors.address}
                            />
                            <Label for="address">Address</Label>
                            <FormFeedback>{errors.address}</FormFeedback>
                          </FormGroup>{" "}
                          <Button
                          className={styles.customButtonSecondary}
                        >
                          Confirm
                        </Button>
                        </Form>
                      </CardBody>
                    )
                  ) : (
                    <CardBody aria-disabled="true">
                      <CardTitle className={styles.paymentCardTitle}>
                        Delivery Address
                      </CardTitle>
                    </CardBody>
                  )}
                </Card>
              </Col>
            </Row>
            <Row style={{ marginTop: "24px" }}>
              <Col>
                <Card className={styles.paymentCard}>
                  {user && isAddressAvailable ? (
                    <CardBody aria-disabled="true">
                      <CardTitle className={styles.paymentCardTitle}>
                        Payment Method
                      </CardTitle>
                      <Row className="mt-3">
                        <Col>
                          <Card
                            onClick={() => handleSelectOption("cash")}
                            className={`${styles.paymentCard} ${
                              selectedOption === "cash"
                                ? styles.paymentCardSelected
                                : ""
                            }`}
                          >
                            <CardBody>
                              <span className="me-2">
                                <FaMoneyBill
                                  style={{
                                    color: "green",
                                    fontSize: "2rem",
                                    height: "30px",
                                    width: "30px",
                                  }}
                                />
                              </span>
                              Cash On Delivery
                            </CardBody>
                          </Card>
                        </Col>
                        <Col>
                          <Card
                            onClick={() => handleSelectOption("gpay")}
                            className={`${styles.paymentCard} ${
                              selectedOption === "gpay"
                                ? styles.paymentCardSelected
                                : ""
                            }`}
                          >
                            <CardBody>
                              <img
                                src="home/google-pay-icon.png"
                                className="me-3"
                                style={{ height: "30px" }}
                              />
                              GPay
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      {selectedOption === "cash" ||
                      selectedOption === "gpay" ? (
                        <Row className="mt-3">
                          <Col className="d-flex justify-content-end">
                            <Button
                              className={styles.customButtonSecondary}
                              onClick={() => handlePayment()}
                            >
                              Make Payment <span className="me-2">&#8377;</span>{" "}
                              {grandTotal}
                            </Button>
                          </Col>
                        </Row>
                      ) : (
                        ""
                      )}
                    </CardBody>
                  ) : (
                    <CardBody aria-disabled="true">
                      <CardTitle className={styles.paymentCardTitle}>
                        Payment Method
                      </CardTitle>
                    </CardBody>
                  )}
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {cart?.cartItems?.length > 0 ? (
        <StickyCartFooter></StickyCartFooter>
      ) : (
        <div></div>
      )}
    </>
  );
}
