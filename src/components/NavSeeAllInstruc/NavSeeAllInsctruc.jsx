import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const NavSeeAllInsctruc = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('https://harmony-camp-server-side-arefin994.vercel.app/allData')
      .then(response => response.json())
      .then(data => setInstructors(data.allItems.popularInstructors))   
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className='text-center'>All Instructors</h1>
      <Container>
        <Row>
          {instructors.map(instructor => (
            <Col key={instructor.id} sm={4}>
              <Card className='mb-4'>
                <Card.Img variant='top' src={instructor.image} alt={instructor.name} />
                <Card.Body>
                  <Card.Title>{instructor.name}</Card.Title>
                  <Card.Text>Email: {instructor.email}</Card.Text>
                  <Card.Text>Students: {instructor.students}</Card.Text>
                  <Card.Text>Classes Taken: {instructor.classesTaken}</Card.Text>
                  <Card.Text>Classes: {instructor.classes.join(', ')}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default NavSeeAllInsctruc;
