import React from "react";
import { Container, Row} from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import CategoryCard from "./CategoryCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/action/categoryAction";
const CategoryContainer = () => {




  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCategory());
  } , [])
  const dataCategory = useSelector(state=>state.allCategory.category)
  const loading = useSelector(state=>state.allCategory.loading)



  return (
    <div className="my-3">
      <Container>
        <div className="admin-content-text ">كل التصنيفات</div>
        <Row className="my-1 justify-content-between">
        {
          loading === false ? (
            dataCategory.data ? (
              dataCategory.data.map((item)=>{
                return(
                  <CategoryCard key={item.id}  title={item.title_ar} img={item.image} background="#F4DBA5"/>
                )
              })
            ) : (<h1>لا يوجد بيانات</h1>)
          ) : (<Spinner animation="border" variant="dark" />)
        }
        </Row>
      </Container>
    </div>
  );
};

export default CategoryContainer;
