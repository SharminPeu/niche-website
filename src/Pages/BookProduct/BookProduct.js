import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./BookProduct.css";

const BookProduct = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState({});

  const history = useHistory();

  const onSubmit = (data) => {
    data.productName = product.name;
    axios
      .post("http://localhost:5000/product/booking", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Your Order is Confirmed");
          reset();
          history.push("/home");
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="container">
      <Navigation></Navigation>
      <div className="my-5">
        <h2 className="mb-3 text-color">Book Your Order</h2>
      
        <Container>
          <Row className="g-4 my-3">
            <Col md={7} lg={8}>
              <h4>Watch Details</h4>
              <div>
                <img className="book-image" src={product?.img} alt="" />
                <hr className="text-secondary mb-2" />
                <div className="text-start d-flex justify-content-between align-items-center">
                  <h2>
                    {product?.name}
                  </h2>
                  <p>
                    {product?.brand}
                  </p>
                </div>
                <div className="text-start">
                  <hr className="text-secondary mb-2" />
                  <h4>Overview</h4>
                  <p>{product?.description}</p>
                  <hr className="text-secondary mb-2" />
                  <h3 className="fw-bold">
                    Cost:
                    <span className="text-danger"> {product?.price}</span>{" "}
                  </h3>
                  <hr className="text-secondary mb-2" />
                  {/* <div className="text-start d-flex justify-content-between"> */}
                    <p>800+ Review</p>
                  {/* </div> */}
                  <hr className="text-secondary mb-2" />
                </div>
              </div>
            </Col>
            <Col md={5} lg={4}>
              <h4>--Order Info--</h4>
              <div className="bg-secondary bg-gradient p-3 rounded">
                <h4 className="text-white">Confirm this product</h4>
                <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name")}
                    defaultValue={user.displayName}
                  />
                  <input {...register("email")} defaultValue={user.email} />
                  <input
                    {...register("address")}
                    placeholder="Your Address"
                    required
                  />
              
                  <textarea {...register("massage")} placeholder="Massage" />
                  <p className="text-start text-white mb-0 mt-1">Your Watch</p>
                  <input defaultValue={product?.name} required />
                  <input
                    className="bg-success border-0 text-white py-2 rounded-pill"
                    type="submit"
                    value="Confirm"
                  />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookProduct;
