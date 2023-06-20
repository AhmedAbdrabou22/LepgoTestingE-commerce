import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductsText from "./ProductsText";
import { useParams } from "react-router-dom";
import baseURL from "../../Api/baseURL";
const ProductDetails = ({ dataDetails }) => {

  let params = useParams();

  // console.log(params);

  const [dataId, setDataId] = useState([])

  const fetchFilmbyId = async () => {

    const detailFilmById = await baseURL.get(`https://api.lepgo.online/api/v1/products/${params.id}`);
    // console.log(detailFilmById.data);
    setDataId(detailFilmById.data)
    // console.log(detailFilmById.data);
    // console.log(dataId);
  }

  // console.log(dataId.data);

  let text = "";
  let description = null
  let imageOne = null
  let imageTwo = null
  let imageThee = null
  let imageFour = null

  if (dataId.data) {
    text = dataId.data.title
    description = dataId.data.desc
    for (let i = 0; i < dataId.data.images.length; i++) {
      for (let j = 0; j < 1; j++) {
        if (i === 0) {
          imageOne = dataId.data.images[i].image;
        } else if (i === 1) {
          imageTwo = dataId.data.images[i].image;
        } else if (i === 2) {
          imageThee = dataId.data.images[i].image;
        } else if (i === 3) {
          imageFour = dataId.data.images[i].image;
        }
      }
    }
  }
  // console.log(text);




  useEffect(() => {
    fetchFilmbyId()
  }, [])


  return (
    <Container>
      <Row className="py-3">
        <Col lg="4" className="">
          <ProductGallery imageOne={imageOne} imageTwo={imageTwo} imageThree={imageThee} imageFour={imageFour} />
        </Col>
        <Col lg="8" className="">
          <ProductsText text={text} description={description} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
