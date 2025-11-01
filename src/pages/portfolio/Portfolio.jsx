import { portfolio } from "../../Data";
import { RiLink } from "react-icons/ri";
import './portfolio.css';
const Portfolio = () => {
  return (
    <div className="portfolio section">
      <h2 className="section-title">
        My <span>Portfolio </span>
      </h2>

      <div className="portfolio-container container grid">
        {
          portfolio.map(({id,image,title,desc,skills,link}) => {
            return(
              <article className="portfolio-card" key={id}>
                <a href={link} className="portfolio-img-wrapper" >
                  <img src={image} className="portfolio-img"></img>
                </a>
                <h3 className="portfolio-title">{title}</h3>
                <p className="portfolio-description">{desc}</p>
                <div className="portfolio-skills">
                  {skills.map((skill, index) => {
                    return(
                      <img src={skill} className="portfolio-skill" key={index}/>
                    )
                  })}
                </div>
                <a href={link} className="portfolio-link" > <RiLink className="link-icon" /> Visit Project</a>
              </article>
            );
        })}
      </div>
    </div>
  );
}

export default Portfolio;