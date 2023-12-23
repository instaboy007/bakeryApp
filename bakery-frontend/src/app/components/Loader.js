import React from 'react';
import ReactLoading from 'react-loading';
import {
    Container,
  } from "reactstrap";
 
const LoadingComponent = () => (
    <Container fluid style={{position: 'absolute', backgroundColor: 'transparent', zIndex: '20000'}} className="h-100 m-auto w-100 d-flex justify-content-center align-items-center">
        <ReactLoading type={"spin"} color={"gray"} height={50} width={50} />

    </Container>
);
 
export default LoadingComponent;