"use client";
import React, { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback
} from "reactstrap";
import styles from "../page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthContext from "@/context/AuthContext";

export default function AuthenticationPanel({ onClose }) {
  const [isLogin, setLogin] = useState(true);

  const { closeAuthPanel, registerUser, loginUser} = useContext(AuthContext)

  const handleSetLogin = () => {
    setLogin(!isLogin);
  };

  const LoginForm = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState({
      email: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });

      // Perform validation
      if (name === "password") {
        if (value.length < 8 && value.length > 0) {
          setErrors({
            ...errors,
            password: "Password must be at least 8 characters long",
          });
        }
        else if(value.length === 0){
          setErrors({
            ...errors,
            password: "Password is Required",
          });
        }else {
          setErrors({
            ...errors,
            password: "",
          });
        }
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Check for errors
      if (errors.password) {
        // Handle validation errors
        console.log("Validation failed");
        return;
      }

      // Continue with form submission
      console.log("Form submitted successfully", formData);
      loginUser(formData.email, formData.password);
      closeAuthPanel();
    };

    return (
      <Row>
        <Col>
          <h5 className={styles.authPanelHeading}>Login</h5>
          <h3 className={styles.authPanelSubHeading}>
            or{" "}
            <a className={styles.authPanelLink} onClick={handleSetLogin}>
              Create an Account
            </a>
          </h3>
          <hr
            className={styles.horizontalLine}
            style={{
              color: "#AD735C",
              height: "1px",
            }}
          />
          <Form onSubmit={handleSubmit}>
            <FormGroup floating>
              <Input id="email" name="email" placeholder="Email" type="email" value={formData.email}
                onChange={handleChange}
                invalid={!!errors.email}/>
              <Label for="email">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                invalid={!!errors.password}
              />
              <Label for="password">Password</Label>
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>{" "}
            <Button className={styles.customButtonSecondary}>Login</Button>
          </Form>
        </Col>
      </Row>
    );
  };

  const CreateForm = () => {

    const [formData, setFormData] = useState({
      email: "",
      phone: "",
      password: "",
    });

    const [errors, setErrors] = useState({
      email: "",
      phone: "",
      password: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });

      // Perform validation
      if (name === "password") {
        if (value.length < 8 && value.length > 0) {
          setErrors({
            ...errors,
            password: "Password must be at least 8 characters long",
          });
        }
        else if(value.length === 0 || value === ''){
          setErrors({
            ...errors,
            password: "Password is Required",
          });
        }else {
          setErrors({
            ...errors,
            password: "",
          });
        }
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Check for errors
      if (errors.password) {
        // Handle validation errors
        console.log("Validation failed");
        return;
      }

      // Continue with form submission
      console.log("Form submitted successfully", formData);
      registerUser(formData.email, formData.phone, formData.password);
      closeAuthPanel();
    };


    return (
      <Row>
        <Col>
          <h5 className={styles.authPanelHeading}>Create an Account</h5>
          <h3 className={styles.authPanelSubHeading}>
            or{" "}
            <a className={styles.authPanelLink} onClick={handleSetLogin}>
              Login
            </a>
          </h3>
          <hr
            className={styles.horizontalLine}
            style={{
              color: "#AD735C",
              height: "1px",
            }}
          />
          <Form onSubmit={handleSubmit}>
            <FormGroup floating>
            <Input id="email" name="email" placeholder="Email" type="email" value={formData.email}
                onChange={handleChange}
                invalid={!!errors.email}/>
              <Label for="email">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                invalid={!!errors.phone}
              />
              <Label for="email">Phone Number</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                invalid={!!errors.password}
              />
              <Label for="password">Password</Label>
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>{" "}
            <Button className={styles.customButtonSecondary}>
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
    );
  };

  return (
    <Container fluid className={styles.authPanel}>
      <Row>
        <Col>
          <a onClick={onClose} className={styles.closeButton}>
            <span aria-hidden="true">&times;</span>
          </a>
        </Col>
      </Row>
      {isLogin ? (
        <Row>
          <Col style={{ paddingLeft: "24px", paddingRight: "24px" }}>
            <LoginForm />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col style={{ paddingLeft: "24px", paddingRight: "24px" }}>
            <CreateForm />
          </Col>
        </Row>
      )}
    </Container>
  );
}
