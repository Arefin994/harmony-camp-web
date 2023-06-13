import React from 'react';
import './ExtraHomeSec.css';

const ExtraHomeSec = () => {
    return (
        <div className="extra-home-section container py-3">
            <h2 className="section-title">Why <span className="clr-cstm-2">Harmony</span>
                Camp</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="feature-card">
                        <img src="path-to-feature1-image" alt="Feature 1" className="feature-image" />
                        <h4 className="feature-title">Inspiring Music Lessons</h4>
                        <p className="feature-description">Experience inspiring music lessons led by our talented instructors. Learn to play various instruments and explore different genres of music.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="feature-card">
                        <img src="path-to-feature2-image" alt="Feature 2" className="feature-image" />
                        <h4 className="feature-title">Fun Musical Activities</h4>
                        <p className="feature-description">Engage in fun and interactive musical activities, such as group jam sessions, songwriting workshops, and music games, that will enhance your musical skills and creativity.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraHomeSec;
