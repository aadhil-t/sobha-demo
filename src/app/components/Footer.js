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
              <img src="/assets/icons/Sobha-reality-black.png" data-aos="fade-right" alt="Phone" />
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
                <li><a href="#">Pearlside Marina Residence</a></li>
                <li><a href="#">Aquamarine Beach Residences</a></li>
                <li><a href="#">Sobha Skyparks</a></li>
                <li><a href="#">Sobha Central</a></li>
              </ul>
              <ul className='pro-ul'>
                <li><a href="#">Sobha Aquacrest</a></li>
                <li><a href="#">Skyscape</a></li>
                <li><a href="#">Sobha Elwood</a></li>
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
          <strong>Disclaimer:</strong> This website is owned and managed by an authorized channel partner. 
                  All information provided is for general guidance only and does not constitute an offer or 
                  solicitation. Prices, availability, and project details are subject to change without notice. 
                  Images and visuals are indicative and may not represent the actual project. While we strive 
                  for accuracy, no guarantee is made regarding the completeness or reliability of the content. 
                  Users are advised to verify all information independently and consult appropriate legal or 
                  financial advisors before making any decisions. For the most accurate, updated, and verified 
                  details regarding pricing, availability, specifications, and services, please contact us directly 
                  through the contact information provided on this website. 
        </div>

        <div className="bottomBar">
          <span>
            Copyright © 
            <a href="https://www.sobhadubai-ae.com"> Propey.com</a> - 2025 | All Right Reserved
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
