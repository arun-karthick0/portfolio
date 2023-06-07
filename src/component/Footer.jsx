function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
