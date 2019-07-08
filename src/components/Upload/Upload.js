import React from 'react';
import './upload.css'
import { Button, Form, FormGroup,  Input, FormText, Card, Container, Row,Col } from 'reactstrap';



const Upload = () => {
    return (
        <div className="upload">
            <h2 className="h2">UPLOAD </h2> 
            <Container>
                <Row>
                    <Col>
                    <Card>
                      
                        <Form className="form">
                            <FormGroup >                               
                                <Input type="file" name="image" />
                                <FormText color="muted">
                                    Upload an image that contains what you want to research on.
                         </FormText>
                            </FormGroup>
                            <Button> UPLOAD </Button>
                        </Form>
                    </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Upload;



