export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Connect</h3>
            <ul>
              <li><a href="mailto:stavinadsouza@gmail.com">Email</a></li>
              <li><a href="tel:9606835113">Phone</a></li>
              <li><a href="https://www.linkedin.com/in/stavinadsouza/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Location</h3>
            <p>Karnataka, India</p>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Stavina Nicole D'Souza. All rights reserved.</p>
          <p>Designed & built with React + Vite</p>
        </div>
      </div>
    </footer>
  )
}
