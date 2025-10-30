import { Link } from 'react-router';
import Profile from '../../assets/home.png'
import { RiArrowRightLine } from 'react-icons/ri';
import './home.css';

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="Profile" className="home-image" />
      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Iskander SOLTANI</span><br /> Full Stack developper</h1>
        <p className="home-description">
          Passionate about web development, I specialize in creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to deliver seamless user experiences and robust functionality.
        </p>
        <Link to={'/about'} className='button'>
          More About Me
          <span className='button-icon'>
            <RiArrowRightLine />
          </span>
        </Link>
      </div>
      <div className="color-block"></div>
    </section>
  );
}

export default Home;