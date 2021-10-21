import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Branch = () => {
    return (
        <div className="bg-primary py-5">
            <Container>
        <h1 style={{fontSize:"4rem"}} className="text-light pb-3 text-center">This is Branches </h1>
        <Row xs={1} md={3} className="g-4">
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Rajshahi Branch </Card.Title>
                <Card.Text>
                    <h4>Address : Rajshahi </h4>
                    <p>Road : 1023 </p>
                    <h5>Call: +19023849</h5>

                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Dhaka Branch</Card.Title>
                <Card.Text>
                    <h4>Address: Dhaka</h4>
                    <p>Road : 1204</p>
                    <h5>Call: +1920383-</h5>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Khulna Branch</Card.Title>
                <Card.Text>
                   <h4>Address: Khulna</h4>
                   <p>Road : 1109</p>
                   <h5>Call: +2948949</h5>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Chittagong Branch</Card.Title>
                <Card.Text>
                 <h4>Address: Chittagong</h4>
                 <p>Road: +1203</p>
                 <h5>Call : +1390394</h5>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Rangpur Branch</Card.Title>
                <Card.Text>
                 <h4>Address : Rangpur</h4>
                 <p>Road: 1304</p>
                 <h5>Call : +109390439</h5>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="border-0">
                <Card.Body>
                <Card.Title>Sylhet Branch</Card.Title>
                <Card.Text>
                 
                 <h4>Address : Sylhet</h4>
                 <p>Road :1839</p>
                 <h5>Call: +032809394</h5>
                               
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
        </div>
    );
};

export default Branch;