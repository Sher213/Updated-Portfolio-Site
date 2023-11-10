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
                I am a very ambitious Data Analyst and Software Developer looking for a role in
                a company that prides itself on it's rigor and innovation. A company that provides 
                opportunities to solve problem's with the best that their employees have to offer.
                </p>
                <p>
                I am confident, driven, and always onto the next thing. I love what I do and I love
                to learn. I am willing to go the extra mile to expand my knowledge and skillset in order to stay
                up to date with industry trends. I am well versed in Python (notable libraries are pandas, numpy, matplotlib, seaborn), SQL, Java,
                Javascript and working in the Microsoft Suite of applications. I thrive in collaborative environments
                where inclusivity and feedback is plentiful. 
                </p>
                <p>
                I am known for my positivity and creativity. I have mentored many students and helped them
                develop valuable skills that will last a lifetime. I have been Captain of our rugby team and freshman on the bench. A student and a teacher.
                My experiences hve taught me that leadership skills only develop by putting learning first. In a constantly changing
                environment, I envision myself in a role where I take the often abtractness of data 
                and transform it into something anyone: from layman to business executive, can digest.
                </p>
                <p>
                In my free time, I enjoy being in nature, working out, reading books and playing sports
                with friends and family. I truly believe that everyone has something positive to offer,
                and that everyone has a story to tell. I hope you enjoyed mine.
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