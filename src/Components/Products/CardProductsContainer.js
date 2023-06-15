import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/action/categoryAction";
import Spinner from 'react-bootstrap/Spinner';

const CardProductsContainer = ({ title, btntitle, pathText ,ProductsData }) => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllProducts())
  } , [])

  const Products = useSelector(state=>state.allProducts.category);


  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/products" />
      <Row className="justify-content-between ">
        {
          Products.data ? (
            Products.data.map((product)=>{
              return(<ProductCard title={product.title} id={product.id} img = {product.image} rates = {product.total_rate}/>)
            })
          ) : (<Spinner animation="border" variant="dark" />)
        }
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
