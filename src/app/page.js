'use client';
import React, { useEffect, useRef, useState   } from 'react';
import Image from "next/image";
import "./home.scss";
import "../styles/_about.scss";
import "../styles/_our-project.scss";
import "../styles/_our-specialities.scss";
import "../styles/_why-dubai.scss";
import "../styles/_dream-home.scss";
import "../styles/_faq.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { initAccordion } from "../app/faq";
import Button from "../app/components/EnquireBtn";
import TopHeadCnt from "../app/components/Topheadcnt";
import FaqSection from "./components/faqSec";
// gsap //
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// AOS //
import AOS from 'aos';
import 'aos/dist/aos.css';
import EnqSetion from './components/EnqSec';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {


  // // On slide change, animate only active slide h1
  // const handleSlideChange = () => {
  //   const swiper = swiperRef.current.swiper;
  //   const slides = swiper.slides;

  //   slides.forEach((slide) => {
  //     const heading = slide.querySelector(".banner-text h1");
  //     if (heading) heading.classList.remove("animate");
  //   });

  //   const activeSlide = slides[swiper.activeIndex];
  //   const activeHeading = activeSlide.querySelector(".banner-text h1");
  //   if (activeHeading) {
  //     void activeHeading.offsetWidth; // trigger reflow
  //     activeHeading.classList.add("animate");
  //   }
  // };

const swiperRef = useRef(null);
  // const [allowTouch, setAllowTouch] = useState(window.innerWidth > 768);
  

  // ✅ Disable touch slide only on mobile (but keep page scroll working)
const [allowTouch, setAllowTouch] = useState(false);

// Run only on client
useEffect(() => {
  setAllowTouch(window.innerWidth > 768);

  const handleResize = () => {
    setAllowTouch(window.innerWidth > 768);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  // ✅ Stop Swiper from preventing page scroll on mobile
  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper) {
      swiper.allowTouchMove = allowTouch;
      swiper.el.style.touchAction = allowTouch ? "pan-y" : "auto"; 
      // 👆 ensures vertical page scroll works when touch is disabled
    }
  }, [allowTouch]);

  // ✅ On slide change, animate only active slide h1
  const handleSlideChange = () => {
    const swiper = swiperRef.current.swiper;
    const slides = swiper.slides;

    slides.forEach((slide) => {
      const heading = slide.querySelector(".banner-text h1");
      if (heading) heading.classList.remove("animate");
    });

    const activeSlide = slides[swiper.activeIndex];
    const activeHeading = activeSlide.querySelector(".banner-text h1");
    if (activeHeading) {
      void activeHeading.offsetWidth; // trigger reflow
      activeHeading.classList.add("animate");
    }
  };
  
  // Trigger animation on first load
  useEffect(() => {
    setTimeout(() => {
      const firstHeading = document.querySelector(".swiper-slide-active .banner-text h1");
      if (firstHeading) firstHeading.classList.add("animate");
    }, 100); // small delay so Swiper is initialized
  }, []);


  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
    });
  }, []);

  // Accordian //
    useEffect(() => {
    initAccordion();
  }, []);

  // Mouse Scroll //
  useEffect(() => {
    const section = document.querySelector(".why-dubai-section");
    const swiperWrapper = section.querySelector(".swiper-wrapper");
    const slides = section.querySelectorAll(".swiper-slide");
  
    // Get total width of all slides combined (including margins)
    let totalWidth = 0;
    slides.forEach((slide, index) => {
      const style = window.getComputedStyle(slide);
      const marginRight = parseFloat(style.marginRight);
      // Add margin for all slides except last
      totalWidth += slide.offsetWidth + (index < slides.length - 1 ? marginRight : 0);
    });
  
    // Horizontal scroll: move wrapper right
    gsap.set(swiperWrapper, { x: 0 });
  
      const scrollTween = gsap.to(swiperWrapper, {
      x: () => totalWidth - window.innerWidth, // move right fully until last slide
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`, // scroll distance matches full width
        anticipatePin: 1,
      },
    });
  
    // Cleanup
    return () => {
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  
  return (
    <main>
      {/* Banner Section */}
    <div className="home-banner">
        <div className="explore-circle">
          <span>• Explore</span>
        </div>
        <span className="banner-line-right" />
      <Swiper
      ref={swiperRef}
        className="banner-swiper"
        modules={[Pagination, Autoplay]}
          direction="vertical"            
        pagination={{ clickable: false }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        allowTouchMove={allowTouch} // 👈 disables swipe only on mobile
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="banner-image" style={{ backgroundImage: 'url("/assets/banner.png")' }}>
            <div className="container banner-text">
              <h1 >
                Explore An Exclusive Lifestyle in the Heart of <span>Dubai</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="banner-image" style={{ backgroundImage: 'url("/assets/banner.png")' }}>
            <div className="container banner-text">
              <h1  >
                Discover The Luxury Living You <span>Deserve</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}
      </Swiper>
    </div>

      {/* About Section */}
      <div className="about-section">
        <div className="abt-outer">
          <div className="container">
            <div className="abt-top-sec">
              <TopHeadCnt
                items={[
                  {
                    heading: "Sobha Realty",
                    subHeading: "Building Excellence for Generations",
                    content: ` At Sobha Realty, we pride ourselves on our uncompromising standards. 
                    Our focus on craftsmanship and detailing is a part of our legacy, spanning five 
                    decades. So while others may consider minor details to be minor, we understand 
                    how these little aspects come together to create an extraordinary living 
                    experience.`
                  }
                ]}
              />
              <div className="abt-btm-sec" >
                <div className="abt-stat-blk" data-aos="fade-up">
                  <div className="stat-head">
                    <h2>50</h2>
                    <h5>Years of incredible legacy </h5>
                  </div>
                  <div className="stat-head">
                    <h2>8Mn</h2>
                    <h5>Square Feet of land area developed</h5>
                  </div>
                  <div className="stat-head">
                    <h2>10%</h2>
                    <h5>Market Share in Dubai</h5>
                  </div>
                </div>
                <div className="abt-img-blk" data-aos="fade-up">
                  <img
                    className="abt-img"
                    src="/assets/status.png"
                    alt="About Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="our-project-section">
        <div className="project-outer">
          <div className="container">
            <TopHeadCnt
              items={[
                {
                  heading: "Our Projects",
                  subHeading: "Explore Our Signature Projects",
                  content:
                    "Explore every detail about the community you wish to be part of."
                },
              ]}
            />

            <div className="project-top-sec">
              <div className="project-top-blk" data-aos="fade-up">
                <div className="project-img">
                  <span className="project-label">1 & 2 BHK</span>
                  {/* <img src="/assets/project1.png" alt="Canalside Marina Residences" /> */}
                  <img src="/assets/beachside.png" alt="Canalside Marina Residences" />
                </div>
                <div className="project-text">
                  <h4>Pearlside Marina Residence</h4>
                  <p>Marjan Island</p>
                  <h5>From 1.40M AED</h5>
                </div>
              </div>

              <div className="project-top-blk" data-aos="fade-up">
                <div className="project-img">
                  <span className="project-label">1,2&3 Bed Apartments</span>
                  <img src="/assets/aquacrust.png" alt="Canalside Marina Residences" />
                </div>
                <div className="project-text">
                  <h4>Aquamarine Beach Residences</h4>
                  <p>Marjan Island</p>
                  <h5>From 1.55M AED</h5>
                </div>
              </div>
            </div>

            <div className="project-btm-sec" data-aos="fade-up">
              <div className="project-btm-blk">
                <div className="project-img">
                  <span className="project-label">1-3 Bed Apartments</span>
                  <img src="/assets/skypark.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Sobha Skyparks</h4>
                    <p>Business Bay</p>
                    <h5>From 2.88M AED</h5>
                </div>
              </div>
              <div className="project-btm-blk">
                <div className="project-img">
                  <span className="project-label">1-3 Bed Apartments</span>
                  <img src="/assets/building2.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Sobha Central</h4>
                    <p>Siniya Island</p>
                    <h5>From 1.59M AED</h5>
                </div>
              </div>
              <div className="project-btm-blk">
                <div className="project-img">
                  <span className="project-label">1-3 Bed Apartments</span>
                  <img src="/assets/building3.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Pierside Marina Residences</h4>
                    <p>Siniya Island</p>
                    <h5>From 1.59M AED</h5>
                </div>
              </div>
              {/* <div className="project-btm-blk">
                <div className="project-img">
                  <span className="project-label">1-3 Bed Apartments</span>
                  <img src="/assets/btm-pro4.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Pierside Marina Residences</h4>
                    <p>Siniya Island</p>
                    <h5>From 1.59M AED</h5>
                </div>
              </div>
              <div className="project-btm-blk">
                <div className="project-img">
                  <span className="project-label">1-3 Bed Apartments</span>
                  <img src="/assets/btm-pro5.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Pierside Marina Residences</h4>
                    <p>Siniya Island</p>
                    <h5>From 1.59M AED</h5>
                </div>
              </div>
              <div className="project-btm-blk">
                <div className="project-img">
                  <span className="project-label">1-3 Bed Apartments</span>
                  <img src="/assets/btm-pro6.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Pierside Marina Residences</h4>
                    <p>Siniya Island</p>
                    <h5>From 1.59M AED</h5>
                </div>
              </div> */}
            </div>
            <div className="project-top-sec">
              <div className="project-btm-blk" data-aos="fade-up">
                <div className="project-img">
                  <span className="project-label">1 & 2 BHK</span>
                  {/* <img src="/assets/project1.png" alt="Canalside Marina Residences" /> */}
                  <img src="/assets/sobha-central.png" alt="Canalside Marina Residences" />
                </div>
                <div className="project-text">
                  <h4>Canalside Marina Residences</h4>
                  <p>Siniya Island</p>
                  <h5>From 1.59M AED</h5>
                </div>
              </div>

              <div className="project-btm-blk" data-aos="fade-up">
                <div className="project-img">
                  <span className="project-label">1,2&3 Bed Apartments</span>
                  <img src="/assets/sobha-aquacrust.png" alt="Canalside Marina Residences" />
                </div>
                <div className="project-text">
                  <h4>Pierside Marina Residences</h4>
                  <p>Siniya Island</p>
                  <h5>From 1.59M AED</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Our Specialities Section */}
      <div className="our-specialities-section">  
        <div className="specialities-outer">
          <div className="container">
            <TopHeadCnt 
              items={[
                {
                  heading: "Our Specialities",
                  subHeading: "Why Choose Sobha Hartland",
                  content:
                    "Experience the new meaning of luxury with Sobha Hartland, Dubai’s best freehold community, positioned in the iconic MBR, just a few minutes away from the world-famous Burj Khalifa."
                },
              ]}
            />

            <div className="features-grid" data-aos="fade-up">
              <div className="feature-item">
                  <div className="icon-wrapper">
                  <img src="/assets/icons/resort.svg" alt="Resort" />
                </div>
                <p>Resort themed facilities & amenities</p>
              </div>
              <div className="feature-item">
                <div className="icon-wrapper icon-2">
                  <img src="assets/icons/security.svg" alt="Security" />
                </div>
                <p>Round the clock security</p>
              </div>
              <div className="feature-item">
                <img src="assets/icons/waterfront.svg" alt="Waterfront" />
                <p>Bespoken homes with waterfront views</p>
              </div>
              <div className="feature-item">
                <img src="assets/icons/landscapes.svg" alt="Views" />
                <p>Eye-catching views and scenic landscapes</p>
              </div>
              <div className="feature-item">
                <img src="assets/icons/luxurious.svg" alt="Community" />
                <p>Luxurious 8 million sq. ft. waterfront community</p>
              </div>
              <div className="feature-item">
                <img src="assets/icons/townhouses.svg" alt="Choices" />
                <p>Choice of Apartments, Villas & Townhouses</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Why Dubai Section */}
      <div className="why-dubai-section">
        <div className="why-dubai-outer">
          <div className="why-dubai-bg">
            <div className="container">
              <TopHeadCnt 
                items={[{
                  heading: "Why Dubai..",
                  subHeading: "Why Invest in Dubai",
                  content:
                    "Dubai is a haven for real estate investors & home buyers. The tax-free rental yields and the mature & transparent real estate market make it more desirable for everyone from different parts of the world."
                }]}
              />

              <Swiper
                modules={[FreeMode, Pagination]}
                slidesPerView={3.5}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                className="whydubaiswipper"
                data-aos="fade-up"
                breakpoints={{
                    0: {
                      slidesPerView: 1.2,
                    },
                    480: {
                      slidesPerView: 1.5,
                    },
                    768: {
                      slidesPerView: 2.2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                    1280: {
                      slidesPerView: 3.5,
                    },
                  }}
              >
                <SwiperSlide>
                  <p>Strategic Location between East & West</p>
                  <img src="/assets/swip1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <p>World’s Highest Rental Yields</p>
                  <img src="/assets/swip2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <p>World-Class Infrastructure</p>
                  <img src="/assets/swip3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <p>Zero Property Tax</p>
                  <img src="/assets/swip1.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Dream Home Section */}
      <div className="dream-home-section">
        <div className="dream-home-outer">
          <div className="container">
            <div className="dream-home-blk" data-aos="fade-right">
              <div className="dream-home-text">
                <h2>Find Your Dream Home Today!</h2>
                <p>Invest in more than property—invest in your future.</p>
                  <Button href="/enquire" label="Enquire Now"/>
              </div>
            </div>
          </div>
          {/* Image OUTSIDE the container */}
          <div className="dream-home-img" data-aos="fade-left">
            <img src="/assets/dream-home.png" alt="Dream Home" />
          </div>
        </div>
      </div>

      {/* Faq Section */}
      <FaqSection/>

      {/* Enquire Section */}
      <EnqSetion/>

    </main>
  );
}
