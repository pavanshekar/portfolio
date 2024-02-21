import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useGetLanguagesIconsQuery } from "../../API/api";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Progress.css";

const Progress = () => {
    const { data: langIcons, isFetching } = useGetLanguagesIconsQuery();
    const [icons, setIcons] = useState([]);
    const [activeIndices, setActiveIndices] = useState({});

    useEffect(() => {
        if (langIcons) {
            setIcons(langIcons);
        }
    }, [langIcons]);

    if (isFetching || !langIcons) return "loading";

    const skillCategories = {
        "Programming Languages": ["Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript"],
        "Web Frameworks and Libraries": ["React.js", "Angular", "Node.js", "Express.js", "Spring Boot", "Django", "Bootstrap"],
        "Testing": ["Jest", "Enzyme", "Protractor", "Jasmine", "Karma", "Mocha", "Chai"],
        "Databases": ["MySQL", "MongoDB", "PostgreSQL", "Hibernate", "Sequelize"],
        "Cloud": ["AWS", "Azure", "GCP", "Docker", "CI/CD", "GitHub Actions", "Packer", "Pulumi"],
        "Data Science Tools and Libraries": ["NumPy", "Pandas", "SciKit-Learn", "MatPlotLib", "Seaborn", "OpenCV"],
        "Software Tools and Technologies": ["Git", "Heroku", "Anaconda", "Jupyter Notebook", "VS Code", "Eclipse"],
    };

    const categorizedSkills = Object.entries(skillCategories).map(([category, skills]) => {
        const skillIcons = skills.map(skill =>
            icons.find(icon => icon.skill === skill)
        ).filter(Boolean);

        return {
            category,
            icons: skillIcons,
        };
    });

    const responsive = {
        0: { items: 1 },
        512: { items: 2 },
        768: { items: 3 },
        1024: { items: 4 },
    };

    return (
        <section id="skills">
            <div className="progress-container">
                <div className="progress-title">
                    <h2>My Skills Progress so far</h2>
                    <h3>My Skills</h3>
                </div>
                {categorizedSkills.map(({ category, icons }) => (
                    <div key={category} className="skill-row row">
                        <div className="skill-category col-md-4 col-sm-12">
                            <h2>{category}</h2>
                        </div>
                        <div className="skill-icons col-md-8 col-sm-12">
                            <AliceCarousel
                                activeIndex={activeIndices[category] || 0}
                                onSlideChanged={(e) => {
                                    setActiveIndices(prev => ({ ...prev, [category]: e.item }));
                                }}
                                infinite
                                autoPlay
                                disableButtonsControls
                                disableDotsControls
                                mouseTracking
                                autoPlayInterval={2000}
                                items={icons.map(icon => (
                                    <div className="mylang" title={icon.skill} key={icon.id}>
                                        <div className="lang-info">
                                            <div className="lang-img">
                                                <img src={icon.icon} alt={icon.skill} />
                                            </div>
                                            <h3>{icon.skill}</h3>
                                        </div>
                                    </div>
                                ))}
                                responsive={responsive}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Progress;
