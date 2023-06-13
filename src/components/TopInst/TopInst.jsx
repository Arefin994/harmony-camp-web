import React, { useState, useEffect } from 'react';
import './TopInst.css';

const TopInst = () => {
  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setTopInstructors(data.popularInstructors);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="top-instructors container py-4">
      <h2 className='text-center py-3'>Top <span className="clr-cstm-2">Instructor</span></h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {topInstructors.map((instructor) => (
          <div key={instructor.id} className="col">
            <div className="card">
              <img src={instructor.image} alt={instructor.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{instructor.name}</h5>
                <p className="card-text">Students: {instructor.students}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInst;
