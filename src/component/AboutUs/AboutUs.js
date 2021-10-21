import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Branch from '../Home/Home/Branch/Branch';

const AboutUs = () => {
    return (
        <div>

            <Branch></Branch>
            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Medical Health & Care</Card.Title>
          <Card.Text>
          During your pretravel visit, Dr. Forouzesh can guide you through any travel vaccinations needed to help prevent you from contracting diseases endemic to certain regions, such as typhoid and hepatitis A. Dr. Forouzesh can also provide medication to help keep you from getting malaria, and she can provide guidance on how to avoid mosquito bites, tick bites, and other potential problems.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </div>
    );
};

export default AboutUs;