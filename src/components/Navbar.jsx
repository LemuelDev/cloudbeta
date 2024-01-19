import '../styles/navbar.css'
import PropTypes from 'prop-types'
import { FaAlignRight, FaXmark } from "react-icons/fa6";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Navbar = ({ toggleTheme }) => {

  const handleTheme = () => {
    toggleTheme()
  }

  const [isMenu, setIsMenu] = useState(false)


  const handleMenu = () => {
    setIsMenu(prev => !prev)
  }

  const handleClose = () => {
    setIsMenu(prev => !prev)
  }

  return (
    <header className='navbar' data-aos="fade-in"  data-aos-duration="2000">
        <div className="head-content">
        <div className="logo">
        <div className="glitch-wrapper">
          <div className="glitch" data-glitch="CloudBeta">CloudBeta</div>
        </div>
      </div>  

      
        <div className='second'>
          <div className="toggle-button" onClick={handleMenu}>
              <FaAlignRight/>
          </div>
          <nav className={isMenu ? 'nav-menu' : ''}>
            <div className="x-button"  onClick={handleClose}>
                <FaXmark/>
            </div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          </nav>
          <div className="toggle">
          <label className="ui-switch">
            <input type="checkbox"/>
            <div className="slider">
              <div className="circle" onClick={handleTheme}></div>
            </div>
          </label>

          </div>
        </div>
        </div>
       
    </header>
  )
}
Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired, 
};

export default Navbar