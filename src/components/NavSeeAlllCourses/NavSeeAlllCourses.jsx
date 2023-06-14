import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const NavSeeAllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://harmony-camp-server-side-arefin994.vercel.app/allData')
      .then(response => response.json())
      .then(data => setCourses(data.allItems.popularClasses))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className='text-center'>All Courses</h1>
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

export default NavSeeAllCourses;
