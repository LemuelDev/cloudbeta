import '../styles/about.css'
import Banner from '../assets/banner.jpg'
import PropTypes from 'prop-types'

const About = ({ theme }) => {
  return (
    <section className="about" id="about">
      <div className="about-main-content">
        <div className="title"  data-aos="fade-up"  data-aos-duration="2500">
              <h4>About Us</h4>
        </div>
        <div className={theme === 'light' ? 'box-white' : 'box-dark'} data-aos="fade-up"  data-aos-duration="2500">
          </div>
        <div className={theme === 'light' ? 'box-white-second' : 'box-dark-second'} data-aos="fade-up"  data-aos-duration="2500">
          </div>
        <div className="about-content">
              <div className="pic-side"  data-aos="fade-up"  data-aos-duration="2500">
                    <img src={Banner} alt="" />
              </div>
              <div className="text-side" data-aos="fade-up"  data-aos-duration="2500">
                  <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Risus ad
                  massa lobortis aptent euismod. Donec ridiculus eu elit nam 
                  eu per diam. Mauris accumsan curabitur pretium facilisi nibh 
                  primis sagittis. Morbi volutpat ad maximus urna sem. 
                  Vestibulum tempor ipsum proin elit fusce odio euismod. 
                  </p>
              </div>
        </div>
      </div>
    </section>
  )
}


About.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default About