import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";
import ProductData from "./ProductData";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        
            <Routes>
            <Route path="/" element={<ProductDisplay/>}></Route>
            <Route path="/display/:id" element={<ProductData/>}></Route>

            </Routes>

      </BrowserRouter>
    </>
  );
}
