import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [products]);
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner className="text-center" animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <div  className=" containeer my-5 p-4">
      <h2 className="mb-0 text-primary">Our Watch Collections</h2>
      <Container>
        <Row className="g-4 my-3">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
