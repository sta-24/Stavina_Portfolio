import './Footer.css'

export function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }


  return (

    <footer className="footer">

      <div className="footer__container">


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

          <div className="footer__contact">

            <a href="mailto:stavinadsouza@gmail.com">
              Email
            </a>


            <a href="tel:9606835113">
              Phone
            </a>


            <a 
            href="https://www.linkedin.com/in/stavinadsouza/"
            target="_blank"
            rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>


        </div>




        <div className="footer__section">

          <h3>Location</h3>

          <p className="footer__location">
            Karnataka, India
          </p>


        </div>


      </div>




      <div className="footer__bottom">

        <p>
          © 2026 Stavina Nicole D'Souza. All rights reserved.
        </p>


        <p>
          Designed & built with React + Vite
        </p>



        <button 
        className="footer__scroll-btn"
        onClick={scrollTop}
        >
          ↑
        </button>


      </div>


    </footer>

  )

}