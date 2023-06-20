import React , {useState} from "react";
import { Row, Col } from "react-bootstrap";
import avatar from "../../images/avatar.png";
import axios from "axios"
const AdminAddCategory = () => {
  const [img , setImg] = useState([avatar])
  const [text, setText] = useState("")
  const onImageChange = (event)=>{
      if(event.target.files && event.target.files[0]){
        setImg(URL.createObjectURL(event.target.files[0]))
      }
  }

  const submitHandle = (event)=>{
    event.preventDefault();
    // const res = axios.post('https://api.lepgo.online/api/v1/products/store')
  }
  console.log(text)
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف جديد</div>
        <Col sm="8">
          <div className="text-form pb-2">صوره التصنيف</div>
          <div className="uploadCategoryDiv">
              <img 
              src={img}
              alt="avatar"
              width="120px"
              height="100px"
              style = {{cursor:"pointer"}}
              />
              <input type="file" id="upload-photo" name="photo" onChange = {onImageChange}/>
            </div>
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف"
            onChange = {(e)=>setText(e.target.value)}
            value = {text}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 " onClick = {submitHandle}>حفظ التعديلات</button>
        </Col>
      </Row>
    </div>
  );
};
export default AdminAddCategory;
