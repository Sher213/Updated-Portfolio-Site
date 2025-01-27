import React, { useEffect, useState } from "react";
import './index.scss';
import P1 from "../../assets/images/p1.png";
import P2 from "../../assets/images/p2.png";
import P3 from "../../assets/images/p3.png";
import P4 from "../../assets/images/p4.png";
import P5 from "../../assets/images/p5.png";
import P6 from "../../assets/images/p6.png";
import P7 from "../../assets/images/p7.png";
import P8 from "../../assets/images/p8.png";
import P9 from "../../assets/images/p9.png";
import P10 from "../../assets/images/p10.jpg";
import P11 from "../../assets/images/p11.png";
import P12 from "../../assets/images/p12.png";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import Loader from 'react-loaders';
import ImageExpand from '../ImageExpand';

const About = () => {
  const [resizeKey, setResizeKey] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleScroll = (e) => {
    setScrollOffset(e.target.scrollTop); // Capture the scroll position of the `projects-cont` div
  };

  // Trigger re-render on window resize
  const handleResize = () => {
    setResizeKey(prevKey => prevKey + 1); // Increment key to force a re-render
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="text-hover">About Me</h1>
          <p>
            As an ambitious Data Analyst and Software Developer, 
            I am seeking a role in a company that values innovation, rigor,
            and the opportunity to tackle complex problems with a collaborative team. 
            My passion for learning and growth drives me to continuously expand my skill set, staying ahead of industry trends and best practices.
          </p>
          <p>
            I am proficient in Python (with expertise in libraries such as pandas, numpy, matplotlib, and seaborn), Java, C, C#, and Javascript, PHP, Perl, MATLAB - 
            using several frameworks and libraries (Angular, jQuery, Node.js, React, Vue), 
            and the Microsoft Suite of applications. 
            My technical strengths are complemented by a commitment to inclusivity and feedback, allowing me to thrive in team environments where collaboration is key. 
          </p>
          <p>
            I bring a positive, creative mindset to all my projects, and my leadership experiences, such as being captain of a rugby team and mentoring students, 
            have honed my ability to guide others while continuously learning myself. 
            I am passionate about transforming complex data into actionable insights that resonate with stakeholders across all levels, from laymen to business executives.
          </p>
          <p>
            Outside of work, I enjoy staying active by spending time in nature, working out, reading, and engaging in sports with friends and family. 
            I believe in the power of diverse perspectives and the value everyone brings to the table.
            Everyone has a story to tell and I hope you enjoyed mine.
            I look forward to the opportunity to bring my unique experience to your team and to be in touch soon.
          </p>
          <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>

        <div
          className="projects-cont"
          style={{
            overflowY: "scroll",
            paddingTop: "30px",
            paddingRight: "30px",
            height: "80vh", // Example height for scrollable area
          }}
          onScroll={handleScroll}
        >
          <div className="projects-title">
            <h1 className="text-hover" style={{ paddingBottom: "10px" }}>
              Projects
            </h1>
          </div>

          {/* Map through project data to avoid repetitive code */}
          {[
            { img: P7, title: "JobHelp", id: "project-image-1", description: "React.tsx and Python Django Web App that allows users to create resumes & cover letters, find relevant jobs, and connect with employers while only talking to a chatbot. Implemented using OpenAI API." },
            { img: P8, title: "NextLook", id: "project-image-2", description: "Created independently, a Web App Service that allows users to get a haircut recommendation based on the response of an ML model that predicts hair type and face shape from a single image. The app then provides similar haircuts through Instagram hashtags and guides the user to book a haircut with local barbers and stylists using Google Maps API." },
            { img: P9, title: "News Aggregator", id: "project-image-3", description: "Created a React-based TypeScript and Java Spring Boot application to aggregate news, and delivered a responsive platform with real-time updates." },
            { img: P10, title: "Puzzle Generator and Solver", id: "project-image-4", description: "Developed a Python Script using Image processing and OpenCV to generate puzzles from images. It can take any image, and generate puzzles of any size and complexity." },
            { img: P11, title: "Facebook Instagram Content Platform", id: "project-image-5", description: "A holistic platform that uses React.js and Python Flask to create a single page application that allows users to post content, including comments and images." },
            { img: P12, title: "Haraj.sa Data Mining Web App", id: "project-image-6", description: "Developed a web application using Python Flask and PHP Laravel that mines data from Haraj.sa, a popular Saudi Arabian auction website." },
            { img: P1, title: "Face Shape and Hair Style Classifier", id: "project-image-7", description: "Two classifiers trained in Python to classify Face and Hair type respectively." },
            { img: P2, title: "Pose Estimation Exercise Classifier", id: "project-image-8", description: "A Python Jupyter Notebook where a classifier was trained on self-collected data using cv2 and mediapipe pose estimation." },
            { img: P3, title: "Amazon Reviews Sentiment Analysis", id: "project-image-9", description: "Python Jupyter Notebook where different data about Amazon reviews and products were visualized and a model trained to perform sentiment analysis on comments." },
            { img: P4, title: "Movie Recommendation Web App", id: "project-image-10", description: "Node.js and Express.js web application that provides users with movie recommendations based on a starting film." },
            { img: P5, title: "Covid-19 Data Visualization", id: "project-image-11", description: "Data from Covid-19 pandemic visualized in Python Jupyter Notebook." },
            { img: P6, title: "Discord Wiki Bot", id: "project-image-12", description: "Javascript bot uses Discord API and Python BeautifulSoup integration to provide users with Wikipedia information regarding search query directly from Discord." },
          ].map((project, index) => (
            <div className="project" key={index}>
              <a href={project.link || '/'} target="_blank" rel="noreferrer">
                <h3>{project.title}</h3>
                <img
                  src={project.img}
                  id={project.id}
                  alt={project.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <p
                  className="scroll-hint"
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    right: "10px",
                    fontSize: "12px", // Adjust size as needed
                    color:"black",
                    padding: "-5px", // Padding for better look
                    zIndex: 1, // Ensure it appears on top of the image
                  }}
                >Scroll over image to expand.</p>
                <p>{project.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Loader type="square-spin" />

      {/* Render the ImageExpand components for all images */}
      {[
        "project-image-1",
        "project-image-2",
        "project-image-3",
        "project-image-4",
        "project-image-5",
        "project-image-6",
        "project-image-7",
        "project-image-8",
        "project-image-9",
        "project-image-10",
        "project-image-11",
        "project-image-12"
      ].map((id, index) => (
        <ImageExpand imgId={id} scrollOffset={scrollOffset} />
      ))}
    </>
  );
};

export default About;
