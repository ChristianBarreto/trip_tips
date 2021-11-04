import { useState, useEffect, setState } from 'react';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import classes from "./ProductForm.module.css";
import { useForm } from "react-hook-form";


function ProductForm (props){

    const [dataArray, setDataArray] = useState([]);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const defaultValues = {
        type: "Destination",
        title: "",
        img_src: "",
        description: "",
    }


    function submitHandler(event){

        const tip_data = {
            type: watch("type"),
            title: watch("title"),
            img_src: watch("image_url"),
            description: watch("description"),
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
            document.getElementById('news').scrollIntoView(); 
            reset({ defaultValues })
                     
        });

    }

    console.log(watch("example"));
    
    return <div>
        <Container>
            <Row>
                <Col md={1} xl={3}></Col>
                    <Col xs={12} md={10} xl={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Add a New Tip</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Share your trip tips with the world!</Card.Subtitle>

                                <Form onSubmit={handleSubmit(submitHandler)}>

                                    <Form.Group className="mb-3" 
                                    controlId="formBasicEmail">
                                        <Form.Select 
                                            aria-label="Default select example" 
                                            {...register("type", { required: true })}>
                                            <option value="Destination">Destination</option>
                                            <option value="Flight">Flight</option>
                                            <option value="Hotel">Hotel</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Title:</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter title" 
                                            {...register("title", { required: true })}/>
                                            {errors.title?.type === 'required' && 
                                                <span className="text-danger">Title is required!</span> ||
                                                <span className="text-muted">Name of the city, flight or hotel.</span>
                                            }  
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Image URL:</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Image URL" 
                                            {...register("image_url", { required: true, pattern: { 
                                                value: /http/,
                                                message: "Use a http... format for image URLs."
                                            }})}
                                        />
                                        {errors.image_url && 
                                            <p className="text-danger">{errors.image_url.message}</p>
                                        }
                                        {errors.image_url?.type === 'required' && 
                                            <span className="text-danger">Image URL is required!</span> ||
                                            <span className="text-muted">Image URL from web.</span>
                                        } 
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Share your tip:</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={3} 
                                            {...register("description", { required: true })}/>
                                            {errors.description?.type === 'required' && 
                                                <span className="text-danger">Description is required!</span> ||
                                                <span className="text-muted">Describe the best tip you want to share with the world.</span>
                                            } 
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
