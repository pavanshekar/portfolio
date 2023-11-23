import React, { useEffect, useState } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import "./Intro.css";
import { useGetHomeDetailsQuery, useGetSocialMediaQuery } from "../../API/api";

const Intro = () => {
    const { data: homeData, isFetching: isFetchingHome } = useGetHomeDetailsQuery();
    const { data: contactData, isFetching: isFetchingContact } = useGetSocialMediaQuery();

    const [homeDetails, setHomeDetails] = useState(null);

    useEffect(() => {
        if (homeData) {
            setHomeDetails(homeData);
            document.title = homeData.name;
        }
    }, [homeData]);

    if (isFetchingHome || isFetchingContact) return "Loading...";

    return (
        <>
            {homeDetails && (
                <section className="intro-page" id="home" key={homeDetails.id}>
                    <div className="decorations">
                        <div className="decor-dot2">
                            <img src={decor3} alt="" />
                        </div>
                        <div className="parcol"></div>
                    </div>
                    <div className="small-intro">
                        <div className="intro-row">
                            <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
                                <div className="intro-name">
                                    <h3 className="hello" data-aos="fade-down" data-aos-duration="1500">
                                        {homeDetails.job_title}
                                    </h3>
                                    <h3 className="name" data-aos="fade-down" data-aos-duration="1600">
                                        Hey! I Am
                                    </h3>
                                    <h3 className="job  text-animate" data-aos="fade-down" data-aos-duration="1700">
                                        {homeDetails.name}
                                    </h3>
                                    <p className="myinfo" data-aos="fade-down" data-aos-duration="1800">
                                        {homeDetails.par_inro}
                                    </p>
                                </div>
                                <div className="intro-btns" data-aos="fade-up" data-aos-duration="1900">
                                    <a href={`mailto:${homeDetails.hireMe_link}`} className="contactMe">
                                        <button className="contact-me">
                                            Hire me <i className="bx bx-send "></i>
                                        </button>
                                    </a>
                                </div>
                                <div className="intro-contact" data-aos="fade-up" data-aos-duration="1800">
                                    <span>Follow Me:</span>
                                    <ul>
                                        <li>
                                            {Array.isArray(contactData) &&
                                                contactData.map((contact) => (
                                                    <a
                                                        href={contact.link}
                                                        className="icon-link"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        key={contact.id}
                                                    >
                                                        <i className={contact.social_icon}></i>
                                                    </a>
                                                ))}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12 left-img " data-aos="fade-down-left">
                                <div className="ff">
                                    <img className="intro-img" src={homeDetails.avatar_img} alt="Profile Pic" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Intro;
