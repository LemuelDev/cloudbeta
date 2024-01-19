import '../styles/contact.css'
import PropTypes from 'prop-types'
import FootLight from '../assets/footlight.svg'
import FootDark from '../assets/footdark.svg'
import { FaEnvelope, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = ({theme}) => {
  return (
    <section id="contact">
        <div className="foot-wave">
            <img src={theme === 'light' ? FootLight : FootDark } alt="" />
        </div>

        <div className="contact-content" data-aos="fade-up"  data-aos-duration="3000">
            <div className="card-left">
                <h4>CLoudBetaIT Solutions</h4>
                <p>Get in touch with us right now <br /> with our different social media platforms.</p>
            </div>
            <div className="card-right">
                  <a href="#"><FaFacebookF /> <span>CloudBeta</span></a>
                  <a href="#"><FaInstagram /> <span>@cloudBeta</span></a>
                  <p><FaEnvelope/> cloudbeta@gmail.com</p>
                  <a href="#"><FaTwitter /> <span>cloud_beta</span></a>
            </div>
        </div>

    </section>
  )
}

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
}

export default Footer