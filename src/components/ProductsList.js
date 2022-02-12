import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/actions/productActions";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ", products);
  return (
    <div className="ui grid container">
      <ProductItem />
    </div>
  );
};

export default ProductsList;
