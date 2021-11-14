import React from "react";
import { Card, Col } from "react-bootstrap";
// import Rating from "react-rating";
// import Rating from "@mui/material/Rating";

import { useHistory } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, brand, img, price, rating, description } = product;
  const history = useHistory();
  const handleBooking = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <Col md={6} lg={4}>
      <Card className="card p-1 border-0">
        <Card.Img className="card-img mx-auto img-fluid image" variant="top" src={img} />
        <Card.Body>
          <div className="d-flex mb-3 justify-content-between  align-items-center">
            <Card.Title className="fw-bold mb-0">{name}</Card.Title>
            <Card.Text>({brand})</Card.Text>
          </div>
          <h4 className="text-start">
            Price: <span className="text-danger">{price}</span>{" "}
          </h4>
          <Card.Text className="text-start">
            {description.slice(0, 80)}.....
          </Card.Text>
          {/* <div className="d-flex justify-content-between  align-items-center">
            <p className="text-start">
              <Rating
                name="read-only"
                value={rating}
                precision={0.1}
                readOnly
              />
            </p>
            <p className="text-start">({rating} out of 5)</p>
          </div> */}
          <button
            onClick={() => handleBooking(_id)}
            className="btn btn-success"
          >
            Book Now
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
