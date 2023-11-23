import React from 'react';
import './EducationExperience.css';
import { useGetEducationWorkExperienceQuery } from '../../API/api';

const EducationExperience = () => {
  const { data, error, isLoading } = useGetEducationWorkExperienceQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <section id="education-experience" className="education-experience-container">
      <div className="row">
        {/* Education Section */}
        <div className="col-lg-5 col-md-5 education-section" data-aos="fade-right">
          <h2>EDUCATION</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="education-detail">
              <img src={edu.logo} alt={edu.university} className="logo" />
              <div>
                <h3>{edu.university}</h3>
                <h2 className="edu-degree">{edu.degree}</h2>
                <p className="edu-completion">{edu.completionDate}</p>
                <h3>Coursework: </h3>
                {edu.coursework && (
                  <ul>{edu.coursework.map((course, index) => (<li key={index}>{course}</li>))}</ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="col-lg-1 col-md-1"></div>

        {/* Work Experience Section */}
        <div className="col-lg-6 col-md-6 work-experience-section" data-aos="fade-left">
          <h2>WORK EXPERIENCE</h2>
          {data.workExperience.map((work) => (
            <div key={work.id} className="experience-detail">
              <img src={work.logo} alt={work.company} className="logo" />
              <div>
                <h3>{work.position}, {work.company}</h3>
                <p className="work-duration">{work.duration}</p>
                <h3>Responsibilities: </h3>
                <ul className="work-responsibilities">
                  {work.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
