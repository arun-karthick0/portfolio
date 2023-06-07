import about from "../images/about.webp";
// import RoundedText from "../images/text2.svg";
// import work from "../images/working.png";
function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={about} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>A full stack web developer in banglore,india✔</h4>
              <p>
                An individual with a multifaceted range of passions, I am deeply
                immersed in the world of photography, finding joy and creativity
                in capturing moments through the lens. Crime novels and books
                captivate my imagination, as I dive into thrilling narratives of
                mystery and suspense. I am an avid traveler, constantly seeking
                new destinations to explore, discovering diverse cultures, and
                expanding my horizons. Recently, I have developed a keen
                interest in the world of crypto, fascinated by its potential and
                the underlying blockchain technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
