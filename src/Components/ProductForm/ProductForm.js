import { useState, useEffect, setState } from 'react';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import classes from "./ProductForm.module.css";
import { useRef } from "react";

function ProductForm (props){

    const typeInputRef = useRef();
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    /*const [isLoading, setIsLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);*/
    // usar onChange(()=> ) ou invés de ref

    const [dataArray, setDataArray] = useState([]);


    function submitHandler(event){
        event.preventDefault();

        const typeInput = typeInputRef.current.value;
        const titleInput = titleInputRef.current.value;
        const img_srcInput = imageInputRef.current.value;
        const descriptionInput = descriptionInputRef.current.value;

        const tip_data = {
            type: typeInput,
            title: titleInput,
            img_src: img_srcInput,
            description: descriptionInput,
            timestamp: Date.now(),
        }

        fetch(
            'https://superchat-a5b12-default-rtdb.firebaseio.com/tips.json',
            {
                method: 'POST',
                body: JSON.stringify(tip_data),
                headers: {
                    'Contend-Type': 'application/json',
                }
            }
        ).then(() => {
            props.childToParent(tip_data);
            typeInputRef.current.value = "Destination";
            titleInputRef.current.value = "";
            imageInputRef.current.value = "";
            descriptionInputRef.current.value = "";
            document.getElementById('news').scrollIntoView(); 
                     
        });
    }

    return <div>
        <Container>
            <Row>
                <Col md={1} xl={3}></Col>
                    <Col xs={12} md={10} xl={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Add a New Tip</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Share your trip tips with the world!</Card.Subtitle>

                                <Form onSubmit={ submitHandler }>

                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Select aria-label="Default select example" ref={ typeInputRef }>
                                            <option value="Destination">Destination</option>
                                            <option value="Flight">Flight</option>
                                            <option value="Hotel">Hotel</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Title:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter title" ref={ titleInputRef } />
                                        <Form.Text className="text-muted">
                                       Name of the city, flight or hotel.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Image URL:</Form.Label>
                                        <Form.Control type="text" placeholder="Image URL" ref={ imageInputRef } />
                                        <Form.Text className="text-muted">
                                            Copy and paste your image URL here.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Share your tip:</Form.Label>
                                        <Form.Control as="textarea" rows={3} ref={ descriptionInputRef }/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className={ classes.button }>
                                        Share
                                    </Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </Col>
                <Col md={1} xl={3}></Col>
            </Row>
        </Container>
    </div>

}

export default ProductForm;
