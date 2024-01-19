import '../styles/homepage.css'
import HeroIcon from '../assets/bg-hero.svg'
import Wave from '../assets/wave.svg'
import WaveBlack from '../assets/wave-black.svg'
import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Homepage = ({theme}) => {

  return (
    <>
    <section className="homepage">
        <div className="home-content" 
         data-aos="fade-up" 
         data-aos-offset="200"
         data-aos-delay="50"
         data-aos-duration="2000">
            <div className="left-side" >
                    <h2 className="title">CloudBeta <br />
                      IT Solutions
                    </h2>
                    <p>Experience the future of technology through exceptional solutions and unparalleled service expertise.</p>
                    <a href="#about"><button className="bn632-hover bn18">Explore More</button></a>

            </div>
            <div className="right-side">
                <img src={HeroIcon} alt="" />
            </div>
        
        </div>
        
        <div className='wave'>
            <img src={theme === 'light' ? Wave : WaveBlack } alt=""  />
        </div>
    </section>
   
    </>
  )
}
Homepage.propTypes = {
  theme: PropTypes.string.isRequired, 
};

export default Homepage