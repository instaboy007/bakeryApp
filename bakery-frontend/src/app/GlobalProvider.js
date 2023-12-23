import React from "react";

import { AuthProvider } from "@/context/AuthContext";
import { ProductProvider } from "@/context/ProductsContext";
import { CartProvider } from "@/context/CartContext";
import { LoadingProvider } from "@/context/LoadingContext";

export function GlobalProvider({ children }) {
  return (
    <LoadingProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>{children}</CartProvider>
        </ProductProvider>
      </AuthProvider>
    </LoadingProvider>
  );
}
