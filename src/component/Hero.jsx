import Waving from "../images/waving.png";
import Html from "../images/Html.svg";
import Css from "../images/Css.svg";
import Js from "../images/Js.svg";
import react from "../images/React.svg";
import MongoDB from "../images/MongoDB.svg";
import exp from "../images/Expressjs.svg";
import Bootstrap from "../images/bootstrap.svg";
import Firebase from "../images/firebase.svg";
import Resume from "../File/ARUN.pdf";
function Hero() {
  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: react,
      title: "React",
    },
    {
      img: exp,
      title: "Express",
    },
    {
      img: MongoDB,
      title: "MongoDb",
    },
    {
      img: Bootstrap,
      title: "bootstrap",
    },
    {
      img: Firebase,
      title: "firebase",
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Full Stack Web-Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  I'm Arun ,A passionate web developer creating mobile
                  Responsive and creative webpages ,lives in bangalore ,India{" "}
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    target="_blank"
                    href="https://www.linkedin.com/in/arun--murali/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    target="_blank"
                    href="https://github.com/arun-karthick0"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href={Resume} download={Resume}>
                    <i className="fa-solid fa-file"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
