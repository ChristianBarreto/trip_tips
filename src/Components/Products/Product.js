import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import classes from "./Products.module.css";




const Product = (props) => {

  var product_id = "";
  
  return (
    <div className={ classes.product_item }>
      <Card style={{ width: '13rem' }}>
        <Card.Img variant="top" src={ props.img_src }  style={{ height: '140px' }}/>
        <Card.Body>
          <Card.Title>{ props.title }</Card.Title>
          <Card.Text>
            { props.description }
          </Card.Text>
          <LinkContainer to={`/product/${ props.id }`}>
            <Button variant="primary">Show Tip</Button>
          </LinkContainer>  
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;