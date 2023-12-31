import React, { useState, useEffect,seEffect } from 'react';
import './PopularClasses.css';
import { Card, Col, Container, Row } from 'react-bootstrap';

const PopularClasses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://harmony-camp-server-side-arefin994.vercel.app/allData')
      .then(response => response.json())
      .then(data => setCourses(data.allItems.popularClasses))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="top-instructors container py-4">
    <h2 className='text-center py-3'>Popular <span className="clr-cstm-2">Classes</span></h2>
    <Container>
        <Row>
          {courses.map(course => (
            <Col key={course.id} sm={4}>
              <Card className='mb-4'>
                <Card.Img variant='top' src={course.image} alt={course.title} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>Students: {course.students}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PopularClasses;
