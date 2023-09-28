import ProBox from "./Probox";
import Blog from "../images/blog.jpg";
import Shopping from "../images/shopping.jpg";
import Movie from "../images/movie.jpg";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Movie-streaming-site"
                img={Movie}
                description="This website is build by using React as client side and manages states by using react-redux with FireBase Authentication and authorization and stores movie list and user comments in MONGODB"
                techno1="React  -- Firebase-Auth"
                techno2="NodeJs --  MongoDB"
                code="https://github.com/arun-karthick0/movies-site.git"
                live="https://movies-app-001.netlify.app/"
                scrollY="-50%"
                // icon="🎁"
              />
              <ProBox
                title="Shopping-site"
                img={Shopping}
                description="This website is build by using React as client side and manages states by using react-redux with FireBase Authentication and authorization and saves users details in MONGODB And here integrated with Stripe gateWay test mode"
                techno1="React -- Firebase-Auth"
                techno2="NodeJS --  MongoDB"
                code="https://github.com/arun-karthick0/shopping-site.git"
                live="https://shopping-site-001.netlify.app/"
                scrollY="-50%"
                // icon="🧧"
              />
              <ProBox
                title="Blog-site"
                img={Blog}
                description="This website is build by using React as client side and manages states by using react-redux with FireBase Authentication and authorization and saves posted blog and user comments details in firebase FireStore database "
                techno1="React -- FireBase-Auth "
                techno2="FireBase Database "
                code="https://github.com/arun-karthick0/blog-.git"
                live="https://blog-site-002.netlify.app/"
                scrollY="-50%"
                // icon=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
