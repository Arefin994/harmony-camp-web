import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavSeeAllStu = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/allData')
      .then(response => response.json())
      .then(data => setStudents(data.allItems.students))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className='text-center'>All Students</h1>
      <Container>
        <Row>
          {students.map(student => (
            <Col key={student.id} sm={4}>
              <Card className='mb-4'>
                <Card.Img variant='top' src={student.image} alt={student.name} />
                <Card.Body>
                  <Card.Title>{student.name}</Card.Title>
                  <Card.Text>Courses: {student.courses.join(', ')}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default NavSeeAllStu;
