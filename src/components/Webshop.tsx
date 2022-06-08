import { useState } from "react";
import { IProducts } from "../models/IProducts";
import { GetAllProducts } from "./GetAllProducts";

export const Webshop = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const getProducts = (products: IProducts[]) => {
    setProducts(products);
  };

  const removeProducts = (id: number) => {
    let filteredProducts = products.filter((t) => t.id !== id);
    setProducts(filteredProducts);
  };

  const getSpecificProduct = (id: number) => {
    let filteredProducts = products.filter((t) => t.id === id);
    setProducts(filteredProducts);
  };

  const updateProduct = () => {};

  return (
    <>
      <GetAllProducts
        removeProduct={removeProducts}
        setProducts={getProducts}
        getProducts={products}
        getSpecificProduct={getSpecificProduct}
      />
    </>
  );
};
