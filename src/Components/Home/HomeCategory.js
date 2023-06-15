import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import {getAllCategory} from "../../redux/action/categoryAction.js"
const HomeCategory = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCategory());
  } , [])
  const dataCategory = useSelector(state=>state.allCategory.category)
  const loading = useSelector(state=>state.allCategory.loading)


  return (
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex  justify-content-between">
        {
          loading === false ? (
            dataCategory.data ? (
              dataCategory.data.slice(0,6).map((item)=>{
                return(
                  <CategoryCard key={item.id}  title={item.title_ar} img={item.image} background="#F4DBA5"/>
                )
              })
            ) : (<h1>لا يوجد بيانات</h1>)
          ) : (<Spinner animation="border" variant="dark" />)
        }
      </Row>
    </Container>
  );
};

export default HomeCategory;
