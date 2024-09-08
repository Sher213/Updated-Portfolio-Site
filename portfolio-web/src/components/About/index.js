import './index.scss'
import P1 from "../../assets/images/p1.png"
import P2 from "../../assets/images/p2.png"
import P3 from "../../assets/images/p3.png"
import P4 from "../../assets/images/p4.png"
import P5 from "../../assets/images/p5.png"
import P6 from "../../assets/images/p6.png"
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
                I am proficient in Python (with expertise in libraries such as pandas, numpy, matplotlib, and seaborn), SQL, Java, JavaScript, and the Microsoft Suite of applications. 
                My technical strengths are complemented by a commitment to inclusivity and feedback, allowing me to thrive in team environments where collaboration is key. 
                </p>
                <p>
                I bring a positive, creative mindset to all my projects, and my leadership experiences, such as being captain of a rugby team and mentoring students, 
                have honed my ability to guide others while continuously learning myself. 
                I am passionate about transforming complex data into actionable insights that resonate with stakeholders across all levels, from laymen to business executives.
                </p>
                <p>
                Outside of work, I enjoy staying active by spending time in nature, working out, reading, and engaging in sports with friends and family. 
                I believe in the power of diverse perspectives and the value everyone brings to the table, 
                and I look forward to bringing my unique experience to a forward-thinking company.
                </p>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <div className="projects-cont">
                <div className="projects-title">
                    <h1 className="text-hover">
                        Projects
                    </h1>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Haircut-Suggestor-Web-App' target='_blank' rel="noreferrer">
                        <h3>Face Shape and Hair Style Classifier</h3>
                        <img src={P1} alt="project 1"/>
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
                        <img src={P2} alt="project 2"/>
                        <p>A Python Jupyter Notebook where a classifier was trained on self collected data (approx. 1000 exercise 
                           images from Google Images) using cv2 and mediapipe pose estimation to classify an image based on 
                           the type of exercise being performed. Model achieved accuracy of 77%. </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Amazon-Data-Visualization' target='_blank' rel="noreferrer">
                        <h3>Amazon Reviews Sentiment Analysis</h3>
                        <img src={P3} alt="project 3"/>
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
                        <img src={P4} alt="project 4"/>
                        <p>Node.js and Express.js web application that provides users with movie recommendations based on a starting film.
                           Backend uses Python Selenium and BeautifulSoup to webscrape recommendations.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/Covid19-Data-Visualization' target='_blank' rel="noreferrer">
                        <h3>Covid-19 Data Visualization</h3>
                        <img src={P5} alt="project 5"/>
                        <p>Data from Covid-19 pandemic visualized in Python Jupyter Notebook. Data such as deaths and
                           recoveries were assessed and made visible in a global heatmap of each respective statistic.
                        </p>
                    </a>
                </div>
                <div className="project">
                    <a href='https://github.com/Sher213/WikiDiscBot' target='_blank' rel="noreferrer">
                        <h3>Discord Wiki Bot</h3>
                        <img src={P6} alt="project 6"/>
                        <p>Javascript bot uses Discord API and Python BeautifulSoup integration to provide user's with Wikipedia information
                           reqgarding search query directly from the Discord application.
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
