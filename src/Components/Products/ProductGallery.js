import React from "react";
import mobile from "../../images/mobile.png";
import mobile1 from "../../images/mobile1.png";
import mobile2 from "../../images/mobile2.png";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import logo from "../../images/logo.png"
const ProductGallery = ({imageOne , imageTwo , imageThree ,imageFour}) => {
  let img1 = ""
  let img2 = ""
  let img3 = ""
  let img4 = ""
  
  img1 = imageOne !== "" ? imageOne : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

  img2 = imageTwo !== "" ? imageTwo : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

  img3 = imageThree !== "" ? imageThree : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

  img4 = imageFour !== "" ? imageFour : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";



  const images = [
    {
      original: imageOne ? imageOne : imageOne,
    },
    {
      original: imageTwo ? imageTwo : imageOne,
    },
    {
      original: imageThree ? img3 : imageOne
    },
    {
      original: imageFour ? img4 :imageOne,
    },
  ];

  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
    pt-2">
      <ImageGallery
        items={images}
        defaultImage={mobile}
        showThumbnails={false}
        isRTL={true}
        showPlayButton={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default ProductGallery;
