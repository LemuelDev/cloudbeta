import '../styles/mission.css'

const Mission = () => {
  return (
    <section className="mission" id='mission'>
      <div className="miss-title"  data-aos="fade-up"  data-aos-duration="2000">
        <h4> Mission & Vision </h4>
      </div>
      <div className="miss-content">
        <div className="miss-card">
            <div className='card-text' data-aos="fade-up"   data-aos-duration="2000">
                <h4>Mission</h4>
            </div>
            <div className='data-card' data-aos="fade-up"   data-aos-duration="2500">
              <p>Our mission is to give a better IT service through innovation, efficiency, and quality. We aim to provide 
                solutions that are easy to use, efficient, and of the highest quality so that our clients can focus on their business goals.
              </p>
            </div>
        </div>
        <div className="miss-card reverse">
            <div className='card-text'data-aos="fade-up"   data-aos-duration="2000">
                <h4>Vision</h4>
            </div>
            <div  className='data-card' data-aos="fade-up"  data-aos-duration="2500">
              <p>CloudBETA IT Solutions shall be a leading IT company in Zambales, innovating and utilizing technology for small and medium enterprises.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Mission