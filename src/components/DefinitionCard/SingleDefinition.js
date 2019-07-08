import React from 'react';
import {
    Card,  CardText, CardBody,
    CardTitle, Container, Row, Col
} from 'reactstrap';
import './singledefinition.css'


const SingleDefinition = ({word, definition}) => {
    return (
        <div>
            <Container className="definition-card-1">
                    <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <CardTitle className="word">{word}</CardTitle>
                                <CardText>{definition}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>              
            

            </Container>
        </div>
    );
};

export default SingleDefinition;

