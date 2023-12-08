import { useGetProjectsQuery } from "../../API/api";
import { useEffect, useState } from "react";
import "./Projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Projects = () => {
  const { data: projects, isFetching } = useGetProjectsQuery();

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    navText: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      310: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 2.7,
      },
      1300: {
        items: 3,
      },
      1440: {
        items: 3,
      },
    },
  };

  const [projectsDetails, setProjectsDetails] = useState(projects);

  useEffect(() => {
    setProjectsDetails(projects);
  }, [projectsDetails, projects]);

  if (isFetching) return "loading";

  return (
    <div className="mywork " id="work">
      <div className="mywork-title">
        <h2>Check Out My Projects</h2>

        <h3>My Work</h3>
      </div>
      <div className="project-row">
        {projectsDetails?.length && (
          <OwlCarousel className="owl-theme" {...options}>
            {projectsDetails?.map((details) => (
              <div className="project" data-aos="fade-up" key={details.id}>
                <div className="project-img">
                  <img
                    src={`${details.project_avatar}`}
                    alt=""
                    className="work-img"
                  />
                </div>

                <div className="date-posted">
                  <div className="who-post">
                    <p className="admin">{details.tech_stack}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h2>{details.project_title}</h2>
                  {/* <p className="work-info">{details.project_info}</p> */}
                  {details.project_info && details.project_info.length > 0 && (
                    <ul className="work-info">
                      {details.project_info.map((info, index) => (
                        <li key={index}>{info}</li>
                      ))}
                    </ul>
                  )}
                  <div className="project-links">
                    {/* <a
                      href={details.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <i className="fa fa-laptop" aria-hidden="true"></i>&nbsp;
                        Live Demo
                      </h6>
                    </a> */}

                    {/* {details.project_link && (
                      <a
                        href={details.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h6 className="learnmore">
                          <i className="fa fa-github" aria-hidden="true"></i> &nbsp;
                          Source Code
                        </h6>
                      </a>
                    )} */}

                    {details.project_links && details.project_links.length > 0 && (
                      <div className="link-container">
                        {details.project_links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <h6 className="learnmore">
                              <i className={`fa fa-github`} aria-hidden="true"></i> &nbsp;
                              {link.text}
                            </h6>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
