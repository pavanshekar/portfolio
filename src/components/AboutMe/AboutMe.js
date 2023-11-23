import "./AboutMe.css";
import { useGetAboutMeQuery, useGetHomeDetailsQuery } from "../../API/api";
import { useEffect, useState } from "react";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";

const AboutMe = () => {
  const { data: aboutData, isFetching: isFetchingAbout } = useGetAboutMeQuery();
  const [aboutMe, setAboutMe] = useState(null);

  const { data: homeDetails, isFetching: isFetchingHomeDetails } = useGetHomeDetailsQuery();
  const [homeDetailsState, setHomeDetailsState] = useState(homeDetails);

  useEffect(() => {
    if (aboutData) {
      setAboutMe(prevState => ({
        ...prevState,
        description: aboutData.description.replace(/\n/g, '<br>'),
        title: aboutData.title || '',
        title_2: aboutData.title_2 || '',
        about_avatar: aboutData.about_avatar || ''
      }));
    }
    if (homeDetails) {
      setHomeDetailsState(homeDetails);
    }
  }, [aboutData, homeDetails]);

  if (isFetchingAbout || isFetchingHomeDetails) {
    return <div>Loading...</div>;
  }

  if (!aboutMe || !homeDetailsState) {
    return <div>Data not available</div>;
  }

  return (
    <main id="about">
      <div className="aboutMe-container">
        <div className="about-decor">
          <div className="about-dots">
            <img src={decor1} alt="" />
          </div>
          <div className="about-rect">
            <img src={reactagle} alt="" />
          </div>
          <div className="about-shady">
            <img src={shady} alt="" />
          </div>
        </div>
        <div className="abouMe-row">
          <div
            className=" col-lg-6 col-md-5 col-sm-12 about-img"
            data-aos="fade-up-right"
          >
            <img src={aboutMe.about_avatar} alt="About Me Avatar" />
          </div>
          <div
            className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
            data-aos="fade-up-left"
          >
            <div className="title">
              <h2>{aboutMe.title}</h2>
              <h3>{aboutMe.title_2}</h3>
            </div>
            <div className="about-description">
              <div id="foo" unselectable="on" className="unselectable">
                <div dangerouslySetInnerHTML={{ __html: aboutMe.description }} />
              </div>
            </div>
            <div className="itscv">
              <a
                href={homeDetailsState.cv_link}
                download="PavanSoma_Shekar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="download-cv">
                  Download Cv <i className="bx bx-download"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
