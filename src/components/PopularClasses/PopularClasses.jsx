import React, { useState, useEffect } from 'react';
import './PopularClasses.css';

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setPopularClasses(data.popularClasses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="top-instructors container py-4">
    <h2 className='text-center py-3'>Popular <span className="clr-cstm-2">Classes</span></h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {popularClasses.map((course) => (
          <div key={course.id} className="col">
            <div className="card">
              <img src={course.image} alt={course.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">Students: {course.students}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
