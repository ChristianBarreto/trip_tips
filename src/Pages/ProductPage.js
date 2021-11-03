import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect, setState, useRef } from 'react';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';

function ProductPage (props){
    const params = useParams();
    const typeInputRef = useRef();
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTips, setLoadedTips] = useState([]);
    const history = useHistory();
  

    useEffect(() => {
        setIsLoading(true);
        fetch('https://superchat-a5b12-default-rtdb.firebaseio.com/tips/' + params.id +'.json').then(response => {
          return response.json();
        }).then(data => {
          typeInputRef.current.value = data.type;
          titleInputRef.current.value = data.title;
          imageInputRef.current.value = data.img_src;
          descriptionInputRef.current.value = data.description;
          setIsLoading(false);
          setLoadedTips(data);
        });
      }, [])


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
            'https://superchat-a5b12-default-rtdb.firebaseio.com/tips/'+params.id+'.json',
            {
                method: 'PUT',
                body: JSON.stringify(tip_data),
                headers: {
                    'Contend-Type': 'application/json',
                }
            }
        ).then(() => {
            history.push("/");
                     
        });
    }

    return <div>
        <Header/>
        <Container>
            <Row>
                <Col md={1} xl={3}></Col>
                    <Col xs={12} md={10} xl={6}>
                        <Card className="mt-3">
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

                                    <Button variant="primary" type="submit">
                                        Share
                                    </Button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </Col>
                <Col md={1} xl={3}></Col>
            </Row>
        </Container>
        <Footer/>
    </div>

}

export default ProductPage;
