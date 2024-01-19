import '../styles/services.css'
import { GrTechnology } from "react-icons/gr";
import PropTypes from 'prop-types'

const Services = ({theme}) => {
  return (
    <section className="services" id='services'>
      <div className="title" data-aos="fade-in"  data-aos-duration="2000">
        <h4>What do we offer?</h4>
      </div>

      <div className="service-content">
          <div className={theme === 'light' ? 'card' : 'dark-card'}  data-aos="fade-up"   data-aos-duration="3000">
              <div className="top">
              <h3><GrTechnology/></h3>
              </div>
              <div className="bottom">
                <h3>System Development</h3>
                <p>Lorem ipsum dolor sidadadd dad daawdwad dawdad dulakesi halhabadhh sample text of the yearis lorem ipsum dolor blanditiis cupiditate modi?</p>
              </div>
          </div>
         
          <div className={theme === 'light' ? 'card' : 'dark-card'}  data-aos="fade-up"   data-aos-duration="3000">
              <div className="top">
                  <h3><GrTechnology/></h3>
              </div>
              <div className="bottom">
                <h3>Data and Technical Planning</h3>
                <p>Lorem ipsum dolor sidadadd dad daawdwad dawdad dulakesi halhabadhh sample text of the yearis lorem ipsum dolor blanditiis cupiditate modi?</p>
              </div>
          </div>
          <div className={theme === 'light' ? 'card' : 'dark-card'}  data-aos="fade-up"   data-aos-duration="3000">
              <div className="top">
              <h3><GrTechnology/></h3>
              </div>
              <div className="bottom">
                <h3>Maintenance of Computers</h3>
                <p>Lorem ipsum dolor sidadadd dad daawdwad dawdad dulakesi halhabadhh sample text of the yearis lorem ipsum dolor blanditiis cupiditate modi?</p>
              </div>
          </div>
          <div className={theme === 'light' ? 'card' : 'dark-card'}  data-aos="fade-up"   data-aos-duration="3000">
              <div className="top">
              <h3><GrTechnology/></h3>
              </div>
              <div className="bottom">
                <h3>Mentorship Program</h3>
                <p>Lorem ipsum dolor sidadadd dad daawdwad dawdad dulakesi halhabadhh sample text of the yearis lorem ipsum dolor blanditiis cupiditate modi?</p>
              </div>
          </div>
         
          <div className={theme === 'light' ? 'card' : 'dark-card'} data-aos="fade-up"  data-aos-duration="3000">
              <div className="top">
                  <h3><GrTechnology/></h3>
              </div>
              <div className="bottom">
                <h3>Network TroubleShooting</h3>
                <p>Lorem ipsum dolor sidadadd dad daawdwad dawdad dulakesi halhabadhh sample text of the yearis lorem ipsum dolor blanditiis cupiditate modi?</p>
              </div>
          </div>
          <div className={theme === 'light' ? 'card' : 'dark-card'} data-aos="fade-up"  data-aos-duration="3000">
              <div className="top">
              <h3><GrTechnology/></h3>
              </div>
              <div className="bottom">
                <h3>Custom Build and Configurations</h3>
                <p>Lorem ipsum dolor sidadadd dad daawdwad dawdad dulakesi halhabadhh sample text of the yearis lorem ipsum dolor blanditiis cupiditate modi?</p>
              </div>
          </div>
         
      </div>
    </section>
  )
}


Services.propTypes = {
  theme: PropTypes.string.isRequired,
}
export default Services