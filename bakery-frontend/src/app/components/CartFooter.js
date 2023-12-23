"use client";
import React, { useContext } from "react";
import { Row, Col, Button } from "reactstrap";
import CartContext from "@/context/CartContext";

import styles from "../page.module.css";
import { useRouter } from "next/navigation";


function StickyCartFooter() {
  const { cart, grandTotal } = useContext(CartContext);

  const totalPrice = cart?.cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const router = useRouter();

  return (
    <div
      style={{ paddingTop: "24px", paddingBottom: "24px", paddingLeft: '10%', paddingRight: '10%' }}
      className={`${styles.stickyCartFooter}`}
    >
        <div
          style={{flexDirection: "row", marginTop: "auto", marginBottom: 'auto'}}
          className={styles.cartSummary}
        >
          <span>{cart?.cartItems?.length} Items in Cart</span>
          <span className="mx-3"> | </span>
          <span>
            Total: <span className="me-2">&#8377;</span>
            {grandTotal.toFixed(2)}
          </span>
        </div>
        <Button className={styles.customButtonSecondary} onClick={()=> router.push('/cart')}>View Cart</Button>
    </div>
  );
}

export default StickyCartFooter;
