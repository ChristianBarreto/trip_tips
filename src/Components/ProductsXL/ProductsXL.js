import React from "react";
import ProductXL from "./ProductXL";
import classes from "./ProductsXL.module.css";
import { Row, Col } from 'react-bootstrap';



function Products(props) {

  return (
    <div className={ classes.products }>
        <Row>
            <Col md={1} xl={3}></Col>
                <Col xs={12} md={10} xl={6}>
                    <h1>{ props.destinations.list_name }</h1>
                    <h5>{ props.destinations.list_description }</h5>
                    <div className={ classes.product_list }>
                        {props.destinations.tips.filter(tip => tip.type == props.type).map((tip) => {
                        return <ProductXL
                            key={ tip.id }
                            id={ tip.id }
                            title={ tip.title }
                            description={ tip.description }
                            img_src={ tip.img_src }/>
                        })}
                    </div>    
                </Col>
            <Col md={1} xl={3}></Col>
        </Row> 
    </div>
  );
}

export default Products;