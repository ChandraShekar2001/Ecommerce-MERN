import React, { useState,useEffect } from "react";
import "./newProductForm.css";
import {
  BsReceipt,
  BsCurrencyDollar,
  BsJournalText,
  BsUiChecks,
  BsBarChartLine,
} from "react-icons/bs";

import { useAlert } from "react-alert";
import { useDispatch,useSelector } from "react-redux";
import { createProduct } from "../../Actions/Product";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {

  const navigate = useNavigate();
  const alert = useAlert();
  const {success,error}=useSelector((state)=>state.product)
  const [details, setdetails] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: '',
  });
  const dispatch = useDispatch();
  const onChangehandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setdetails({
      ...details,
      [name]:value,
    })
  };

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    dispatch(createProduct(details));
  }

  useEffect(() => {
    if(success){
      alert.success("Product created successfully")
      navigate("/admin/products")
    }
    if(error){
      alert.error(error)
    }
    dispatch({type:"newProductRequestReset"})
  }, [success,error,dispatch, alert, navigate])
  

  

  return (
    <>
      <div className="newformContainer">
        <div className="new-form-box">
          <h1>ADD PRODUCT</h1>
          <form>
            <div className="input-group">
              <div className="input-field">
                <span>
                  <BsReceipt />
                </span>
                <input
                  type="text"
                  placeholder="product name"
                  name="name"
                  value={details.name}
                  onChange={onChangehandler}
                />
              </div>
              <div className="input-field">
                <span>
                  <BsCurrencyDollar />
                </span>
                <input
                  type="number"
                  placeholder="price"
                  name="price"
                  value={details.price}
                  onChange={onChangehandler}
                />
              </div>
              <div className="input-field">
                <span>
                  <BsJournalText />
                </span>
                <input
                  type="text"
                  placeholder="product discription"
                  name="description"
                  value={details.description}
                  onChange={onChangehandler}
                />
              </div>
              <div className="input-field">
                <span>
                  <BsUiChecks />
                </span>
                <input
                  type="text"
                  placeholder="category"
                  name="category"
                  value={details.category}
                  onChange={onChangehandler}
                />
              </div>
              <div className="input-field">
                <span>
                  <BsBarChartLine />
                </span>
                <input
                  type="number"
                  placeholder="stock"
                  name="stock"
                  value={details.stock}
                  onChange={onChangehandler}
                  min="1"
                />
              </div>
              <div>
                <input
                  style={{ marginTop: "5%" }}
                  type="file"
                  placeholder="upload file"
                />
              </div>
            </div>
            <div className="btn-field">
              <button type="button" onClick={onSubmitHandler}>ADD PRODUCT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
