import Image from 'next/image';
import Link from 'next/link';
import "../../styles/_footer.scss"

export default function Footer() {
  return (
  <footer className="footer">
    <div className='foot-outer'>
      <div className='container'>
        <div className='logo-wrappper'>
          <div className='logo-blk'>
              <img src="/assets/icons/sobha-footicon.svg" data-aos="fade-right" alt="Phone" />
              <h4 data-aos="fade-left">Looking for the perfect investment? Secure your Sobha residence now.</h4>
          </div>
        </div>
        <div className="topSection">
          <div className="logoSection">

            <div className="contact" data-aos="fade-up">
              <p>Sales Enquiry</p>

              <div className="contact-item">
                <img src="/assets/icons/call-icon.svg" alt="Phone" />
                <a href="tel:+971800999999" target="_blank" rel="noopener noreferrer">
                  +971 800 999 999
                </a>
              </div>

              <div className="contact-item">
                <img src="/assets/icons/message-icon.svg" alt="Email" />
                <a href="mailto:hello@sobharealty.com" target="_blank" rel="noopener noreferrer">
                  hello@sobharealty.com
                </a>
              </div>
            </div>
          </div>

          <div className="projects" data-aos="fade-up">
            <p>Our Projects</p>
            <div className='project-blk'>
              <ul className='pro-ul'>
                <li><a href="#">Sobha The S Tower</a></li>
                <li><a href="#">Sobha Hartland Heights</a></li>
                <li><a href="#">Sobha Waves Heights</a></li>
                <li><a href="#">Sobha Waves Opulence</a></li>
              </ul>
              <ul className='pro-ul'>
                <li><a href="#">Sobha Seahaven</a></li>
                <li><a href="#">SOBHA Marina Dubai</a></li>
                <li><a href="#">Sobha Delphine Beach Residences</a></li>
                <li><a href="#">Sobha Solis</a></li>
              </ul>
            </div>
          </div>

          <div className="social" data-aos="fade-up">
            <p>Social Links</p>
            <div className="socialIcons">
              <a href="#"><img src="/assets/icons/twitter.svg" alt="X" /></a>
              <a href="#"><img src="/assets/icons/instagram.svg" alt="Instagram" /></a>
              <a href="#"><img src="/assets/icons/facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="/assets/icons/youtube.svg" alt="Youtube" /></a>
            </div>
          </div>
        </div>

        <div className="disclaimer" data-aos="fade-up">
          <strong>Disclaimer:</strong> Iaculis aliquam scelerisque odio justo eget justo duis egestas.
          Tristique quis at volutpat nec mi. Faucibus interdum pretium tellus velit purus dui sed tellus. Ac facilisis 
          risus risus at pharetra fringilla integer tellus. Dignissim eget facilisis ac est maecenas egestas ut sed. 
          Cursus euismod tempus ipsum dui diam arcu ut ut at. Et sodales risus id est odio arcu feugiat. Lobortis rhoncus 
          sed nec cras. Vel mollis venenatis  Iaculis aliquam scelerisque odio justo eget justo duis egestas. Tristique 
          quis at volutpat nec mi. Faucibus interdum pretium tellus velit purus dui sed tellus. Ac facilisis risus risus 
          at pharetra fringilla integer tellus. Dignissim eget facilisis ac est maecenas egestas ut sed. Cursus euismod 
          tempus ipsum dui diam arcu ut ut at. Et sodales risus id est odio arcu feugiat. Lobortis rhoncus sed nec cras. 
          Vel mollis venenatis 
        </div>

        <div className="bottomBar">
          <span>
            Copyright © 
            <a href="https://www.sobhadubai-ae.com"> www.sobhadubai-ae.com</a> - 2025 | All Right Reserved
          </span>
          <div className='bottomBar-privacy'>
            <a href="#">Privacy Policy </a> | <a href="#"> Sitemap</a>
          </div>
        </div>
      </div>
    </div>
</footer>

  );
}
