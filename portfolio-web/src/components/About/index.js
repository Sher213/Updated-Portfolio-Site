import './index.scss'
import P1 from "../../assets/images/p1.png"
import P2 from "../../assets/images/p2.png"
import P3 from "../../assets/images/p3.png"
import P4 from "../../assets/images/p4.png"
import P5 from "../../assets/images/p5.png"
import P6 from "../../assets/images/p6.png"
import P7 from "../../assets/images/p7.png"
import P8 from "../../assets/images/p8.png"
import P9 from "../../assets/images/p9.png"
import P10 from "../../assets/images/p10.jpg"
import P11 from "../../assets/images/p11.png"
import P12 from "../../assets/images/p12.png"
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'

const About = () => {

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1 className='text-hover'>
                About Me
                </h1>
                <p>
                As an ambitious Data Analyst and Software Developer, 
                I am seeking a role in a company that values innovation, rigor,
                and the opportunity to tackle complex problems with a collaborative team. 
                My passion for learning and growth drives me to continuously expand my skill set, staying ahead of industry trends and best practices.
                </p>
                <p>
                I am proficient in Python (with expertise in libraries such as pandas, numpy, matplotlib, and seaborn), Python, Java, C, C#, and Javascript, PHP, Perl, MATLAB - 
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
                Everyone has a story to tell and I hopy you enjoyed mine.
                I look forward to the opportunity to bring my unique experience to your team and to be in touch soon.
                </p>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <div className="projects-cont" style={{overflowY: 'scroll', paddingTop: "30px", paddingRight: "30px"}}>
                <div className="projects-title">
                    <h1 className="text-hover" style={{paddingBottom: "10px"}}>
                        Projects
                    </h1>
                </div>
                <div className="project">
                    <a href='/' target='_blank' rel="noreferrer">
                        <h3>JobHelp</h3>
                        <img src={P7} alt="project 1"/>
                        <p>React.tsx and Python Django Web App that allows users to create resumes & cover letters, find relevant jobs, and connect with employers
                           while only talking to a chatbot. Implemented using OpenAI API.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Haircut-Suggestor-Web-App' target='_blank' rel="noreferrer">
                        <h3>NextLook</h3>
                        <img src={P8} alt="project 2"/>
                        <p>Created independently, a Web App Service that allows users to get a haircut recommendation based on the response of an ML model that predicts
                           hair type and face shape from a single image. The app then provides similar haircuts through Instagram hashtags and guides the user to
                           book a haircut with local barbers and stylists using Google Maps API. Demoed on LinkedIn to 700+ impressions.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/news-aggregator' target='_blank' rel="noreferrer">
                        <h3>News Aggregator</h3>
                        <img src={P9} alt="project 3"/>
                        <p>Created a React-based TypeScript and Java Spring Boot application to aggregate news, and delivered a responsive platform with real-time updates.
                           News aggregator uses components integrated seamlessly, response time of ~50ms from API, front-end in clean modern UI.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/puzzle-solver' target='_blank' rel="noreferrer">
                        <h3>Puzzle Generator and Solver</h3>
                        <img src={P10} alt="project 4"/>
                        <p>Developed a Python Script using Image processing and OpenCV to generate puzzles from images. It can take any image, and generate puzzles of any size
                           and complexity. The script can also solve the puzzle and provide the original image. There is also a ML model that can predict the solution of the puzzle.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://www.freelancer.com/u/asher2123222' target='_blank' rel="noreferrer">
                        <h3>Facebook Instagram Content Platform</h3>
                        <img src={P11} alt="project 5"/>
                        <p>A holistic platform that uses React.js and Python Flask to create a single page application that allows users to post content, including comments and images,
                           and review and respond to messages and comments. THe platform supports both Facebook and Instagram content from their APIs.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://www.freelancer.com/u/asher2123222' target='_blank' rel="noreferrer">
                        <h3>Haraj.sa Data Mining Web App</h3>
                        <img src={P12} alt="project 6"/>
                        <p>Developed a web application using Python Flask and PHP Laravel that mines data from Haraj.sa, a popular Saudi Arabian auction website. Developed into a fully functional
                           application that also provides page owner with analytics and insights into their page performance. Built in CRM with customer management and ticket support system. Developed across
                           cross functional team of international developers.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Haircut-Suggestor-Web-App' target='_blank' rel="noreferrer">
                        <h3>Face Shape and Hair Style Classifier</h3>
                        <img src={P1} alt="project 7"/>
                        <p>Two classifiers trained in Python to classify Face and Hair type respectively.
                           Data like face height/width ratio and eye width/jaw width ratio was collected in Jupyter Notebook
                           and is developed as a Web App
                           where users can find out their face and hair type and have haircuts
                           recommended for them.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Exercises-Prediction-Model' target='_blank' rel="noreferrer">
                        <h3>Pose Estimation Exercise Classifier</h3>
                        <img src={P2} alt="project 8"/>
                        <p>A Python Jupyter Notebook where a classifier was trained on self collected data (approx. 1000 exercise 
                           images from Google Images) using cv2 and mediapipe pose estimation to classify an image based on 
                           the type of exercise being performed. Model achieved accuracy of 77%. </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Amazon-Data-Visualization' target='_blank' rel="noreferrer">
                        <h3>Amazon Reviews Sentiment Analysis</h3>
                        <img src={P3} alt="project 9"/>
                        <p>Python Jupyter Notebook where different data about Amazon reviews and products were visualized.
                           Correlation between user product rating and discount price were assessed. Notebook also includes
                           a model trained to perform sentiment analysis on comments and predict user rating. Model achieved
                           MSE of 0.03.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Movie-Recommendation-App' target='_blank' rel="noreferrer">
                        <h3>Movie Recommendation Web App</h3>
                        <img src={P4} alt="project 10"/>
                        <p>Node.js and Express.js web application that provides users with movie recommendations based on a starting film.
                           Backend uses Python Selenium and BeautifulSoup to webscrape recommendations.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Covid19-Data-Visualization' target='_blank' rel="noreferrer">
                        <h3>Covid-19 Data Visualization</h3>
                        <img src={P5} alt="project 11"/>
                        <p>Data from Covid-19 pandemic visualized in Python Jupyter Notebook. Data such as deaths and
                           recoveries were assessed and made visible in a global heatmap of each respective statistic.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='' target='_blank' rel="noreferrer">
                        <h3>Discord Wiki Bot</h3>
                        <img src={P6} alt="project 12"/>
                        <p>Javascript bot uses Discord API and Python BeautifulSoup integration to provide user's with Wikipedia information
                           regarding search query directly from the Discord application.
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <Loader type="square-spin" />
        </>
    )
}

export default About
