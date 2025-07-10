import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import logo2 from '../../assets/logo2.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="theme pattern" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={logo2} alt="Profile" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a passionate and self-driven web developer with a solid foundation in front-end technologies and hands-on experience in building responsive web applications.</p>
                        <p>Proficient in HTML, CSS, JavaScript, React.js, and backend tools like Node.js, Express.js, SQL, and MongoDB.</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "75%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node.js</p>
                            <hr style={{ width: "65%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Express.js</p>
                            <hr style={{ width: "65%" }} />
                        </div>
                        <div className="about-skill">
                            <p>SQL</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>MongoDB</p>
                            <hr style={{ width: "75%" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3⭐</h1>
                    <p>Java – HackerRank</p>
                </div>
            </div>
        </div>
    );
};

export default About;
