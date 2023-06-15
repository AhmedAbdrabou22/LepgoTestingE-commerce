import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import PaginationCompontent from "../../Components/Utility/Pagination";
import CategorysHeader from "../../Components/Category/CategorysHeader";
import SideFilter from "../../Components/Utility/SideFilter";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsPage } from "../../redux/action/categoryAction";
const ShopProducsPage = () => {

  const dispatch = useDispatch()




  useEffect(()=>{
    dispatch(getAllProductsPage())
  } , [])

  const Products = useSelector(state=>state.allProducts.category);
  console.log(Products.data);



    // if(Products.meta){
    //     console.log(Products.meta.last_page); 
    // }

    let pageCount = 0;

    if(Products.meta){
        pageCount = Products.meta.last_page;
    }
    

    const getPage = (page)=>{
      dispatch(getAllProductsPage(page))
  
    }



  return (
    <div style={{ minHeight: "670px" }}>
      <CategorysHeader />
      <Container style={{ minHeight: "660px" }}>
        <div className="">
          <SearchCountResult title="600 منتج متاح" />
          <Row className="d-flex flex-row">
            <Col sm="2" xs="2" md="1" className="d-flex">
              <SideFilter />
            </Col>
            <Col sm="10" xs="11" md="11">
              <CardProductsContainer ProductsData = {Products.data} title="" btntitle="" />
            </Col>
          </Row>
          <PaginationCompontent CountPage = {pageCount} onPress = {getPage}/>
        </div>
      </Container>
    </div>
  );
};

export default ShopProducsPage;
