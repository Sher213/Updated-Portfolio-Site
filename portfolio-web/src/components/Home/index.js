import Typed from "react-typed"
import { Link } from 'react-router-dom'
import './index.scss'
import BackgroundCircuits from "../../assets/images/circuit-img2.png"
import Loader from 'react-loaders'

const Home = () => {

    return (
        //<div>Icons made from <a href="https://www.onlinewebfonts.com/icon">svg icons</a>is licensed by CC BY 4.0</div>
        <>
        <div className='container home-page'>
            <img src={BackgroundCircuits} className="background-image" alt="circuits backgrond"/>
            <div className="text-zone">
                <h1>Hi, <br/> I'm Ali Sher 
                <br />
                <Typed
                    strings={[
                        'Data Analyst',
                        'Software Developer',
                        'Rugby Player',
                        'Teacher',
                        'Book Reader',
                        'Data Lover'
                    ]}
                    typeSpeed={150}
                    backSpeed={150}
                    loop
                />
                </h1>
                <h2>Data Visualization / Python Pandas / SQL / Machine Learning </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="square-spin" />
        </>
    )
}

export default Home