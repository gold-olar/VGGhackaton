import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, } from 'reactstrap';

class Services extends React.Component {
    render() {
        return (
            <div className="services-section" >
                <Container>
                    <Row>
                        <Col>
                            <h2 className="h2"> SERVICES </h2>
                        </Col>
                    </Row>
                </Container>
                <Container>

                    <Row>
                        <Col xs="6" sm="4">
                            <Card className="card" body>
                                <CardTitle className="services-icon"><ion-icon size= 'large' name="list-box"></ion-icon></CardTitle>
                                <CardText> Get definitions of the key words from the file you upload.</CardText>

                            </Card>

                        </Col>
                        <Col xs="6" sm="4">
                            <Card className="card" body>
                                <CardTitle className="services-icon"><ion-icon size="large" name="checkmark-circle-outline"></ion-icon></CardTitle>
                                <CardText> Take a quick quiz on the context of whatever you upload.</CardText>

                            </Card>


                        </Col>
                        <Col sm="4">
                            <Card className="card" body>
                                <CardTitle className="services-icon"><ion-icon size="large" name="school"></ion-icon></CardTitle>
                                <CardText> Get Smart at what you do at school.</CardText>

                            </Card>


                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default Services;