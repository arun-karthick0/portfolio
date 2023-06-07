import ProBox from "./Probox";
import Bazaar from "../images/bazzar.jpg";
import Books from "../images/books.jpg";
import Chat from "../images/chat.jpg";
import Crypto from "../images/crypto.jpg";

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
                title="E-commerce-website"
                img={Bazaar}
                description="A shopping website we can add and remove dynamically items and make a payment via stripe gateway and login by using Firebase"
                techno1="React"
                techno2="firebase||stripe||redux"
                code="https://github.com/arun-karthick0/e-commerece-site.git"
                live="https://bazzar01.netlify.app"
                scrollY="-50%"
                icon="🎁"
              />
              <ProBox
                title="chat-app"
                img={Chat}
                description="A real time chat app by using react and Firebase method of authentication ,storage,realtime database"
                techno1="React"
                techno2="FireBase"
                code="https://github.com/arun-karthick0/chat-app.git"
                live="https://chat-app08.netlify.app"
                scrollY="-50%"
                icon="🧧"
              />
              <ProBox
                title="defi-crypto based website"
                img={Crypto}
                description="A defi based crypto website by using Crypto API"
                techno1="React"
                techno2="coingeko-Api"
                code="https://github.com/arun-karthick0/crypto-defi.git"
                live="https://cryrpto-defi.netlify.app"
                scrollY="-50%"
                icon="💲"
              />
              <ProBox
                title="book finder website"
                img={Books}
                description="Finding a Book based on query by using google Api"
                techno1="React"
                techno2="google-book-api"
                code="https://github.com/arun-karthick0/book-finder.git"
                live="https://book-finder-site01.netlify.app"
                scrollY="-50%"
                icon="📖"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
