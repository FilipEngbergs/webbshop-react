import axios from "axios";
import { useEffect, useState } from "react";
import { IProducts } from "../models/IProducts";

export interface IPropsProducts {
  getProducts: IProducts[];
  setProducts(products: IProducts[]): void;
  removeProduct(id: number): void;
  getSpecificProduct(id: number): void;
}

export const GetAllProducts = (props: IPropsProducts) => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (props.getProducts.length !== 0) return;
    axios
      .get<IProducts[]>(
        "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
      )
      .then((response) => {
        props.setProducts(response.data);
      });
  });

  return (
    <>
      <div>
        {props.getProducts.map((p) => {
          return (
            <div key={p.id}>
              <h1>{p.name}</h1>
              <img src={p.imageUrl} alt={p.name} />
              <p>{p.description}</p>
              <h2></h2>
              <h3>{p.price}</h3>
              <button
                onClick={() => {
                  props.removeProduct(p.id);
                }}
              >
                Ta bort
              </button>
              {toggle ? (
                <button
                  onClick={() => {
                    props.getSpecificProduct(p.id);
                    setToggle(!toggle);
                  }}
                >
                  Show Product
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .get<IProducts[]>(
                        "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
                      )
                      .then((response) => {
                        props.setProducts(response.data);
                      });
                    setToggle(!toggle);
                  }}
                >
                  Go back
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
