import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import classes from "./ProductsXL.module.css";




const Product = (props) => {
  return (
    <div className={ classes.product_item }>
          <Card className="">
          <Card.Img variant="top" src={ props.img_src }/>
          <Card.Body>
            <Card.Title>{ props.title }</Card.Title>
            <Card.Text>
              { props.description }
            </Card.Text>
            <LinkContainer  to={`/product/${ props.id }`}>
              <Button variant="primary">Show Tip</Button>
            </LinkContainer>
          </Card.Body>
          </Card>

    </div>
  );
};

export default Product;