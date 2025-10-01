'use client';
import React, { useEffect } from 'react';
import Image from "next/image";
import "./home.scss";
import "../styles/_about.scss";
import "../styles/_our-project.scss";
import "../styles/_our-specialities.scss";
import "../styles/_why-dubai.scss";
import "../styles/_dream-home.scss";
import "../styles/_faq.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { initAccordion } from "../app/faq";
import Button from "../app/components/EnquireBtn";
import TopHeadCnt from "../app/components/Topheadcnt";

export default function Home() {
    useEffect(() => {
    initAccordion();
  }, []);
  return (
    <main>
      {/* Banner Section */}
      <div className="home-banner">
        <div className="banner-image">
          <div className="container banner-text">
            <h1>
              Explore An Exclusive Lifestyle in the Heart of <span>Dubai</span>
            </h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="abt-outer">
          <div className="container">
            <div className="abt-top-sec">
              <TopHeadCnt
                items={[
                  {
                    heading: "About Us",
                    subHeading: "Sobha Hartland",
                    content: `Truly An International Luxury Developer in Dubai, Sobha Realty
                      Developing some of the best masterpieces in Hartland (freehold
                      community) spread over 8 million sq. ft. Sobha Dubai’s residential
                      communities with the best community amenities are perfect for leisure
                      and hospitality. As well, Dubai’s most popular retail stores, malls,
                      markets, and commercial developments are nearby.`
                  }
                ]}
              />
              <div className="abt-btm-sec">
                <div className="abt-stat-blk">
                  <div className="stat-head">
                    <h2>8M+</h2>
                    <h5>Total Land Area</h5>
                  </div>
                  <div className="stat-head">
                    <h2>5K+</h2>
                    <h5>Happy Families</h5>
                  </div>
                  <div className="stat-head">
                    <h2>30+</h2>
                    <h5>Years Experience</h5>
                  </div>
                </div>
                <div className="abt-img-blk">
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
              <div className="project-top-blk">
                <div className="project-img">
                  <img src="/assets/project1.png" alt="Canalside Marina Residences" />
                </div>
                <div className="project-text">
                  <h4>Canalside Marina Residences</h4>
                  <p>Siniya Island</p>
                  <h5>From 1.59M AED</h5>
                </div>
              </div>

              <div className="project-top-blk">
                <div className="project-img">
                  <img src="/assets/project2.png" alt="Canalside Marina Residences" />
                </div>
                <div className="project-text">
                  <h4>Pierside Marina Residences</h4>
                  <p>Siniya Island</p>
                  <h5>From 1.59M AED</h5>
                </div>
              </div>
            </div>

            <div className="project-btm-sec">
              <div className="project-btm-blk">
                <div className="project-img">
                  <img src="/assets/btm-pro1.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Pierside Marina Residences</h4>
                    <p>Siniya Island</p>
                    <h5>From 1.59M AED</h5>
                </div>
              </div>
              <div className="project-btm-blk">
                <div className="project-img">
                  <img src="/assets/btm-pro2.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Pierside Marina Residences</h4>
                    <p>Siniya Island</p>
                    <h5>From 1.59M AED</h5>
                </div>
              </div>
              <div className="project-btm-blk">
                <div className="project-img">
                  <img src="/assets/btm-pro3.png" alt="Pierside Marina Residences" />
                </div>
                  <div className="project-text">
                    <h4>Pierside Marina Residences</h4>
                    <p>Siniya Island</p>
                    <h5>From 1.59M AED</h5>
                </div>
              </div>
              <div className="project-btm-blk">
                <div className="project-img">
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
                  <img src="/assets/btm-pro6.png" alt="Pierside Marina Residences" />
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

            <div className="features-grid">
              <div className="feature-item">
                <img src="assets/icons/resort.svg" alt="Resort" />
                <p>Resort themed facilities & amenities</p>
              </div>
              <div className="feature-item">
                <img src="assets/icons/security.svg" alt="Security" />
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
            <div className="dream-home-blk">
              <div className="dream-home-text">
                <h2>Find Your Dream Home Today!</h2>
                <p>Invest in more than property—invest in your future.</p>
                  <Button href="/enquire" label="Enquire Now"/>
              </div>
            </div>
          </div>
          {/* Image OUTSIDE the container */}
          <div className="dream-home-img">
            <img src="/assets/dream-home.png" alt="Dream Home" />
          </div>
        </div>
      </div>

      {/* Faq Section */}
      <section className="faq-section">
        <div className="faq-outer">
          <div className="container">

            <div className="faq-header">
              <span className="dot">.</span>
              <p className="label">FAQ</p>
              <h2>Frequently Asked Questions!</h2>
            </div>

            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-question">
                  <span className="number">01.</span>
                  <span className="text">Why should you invest in Sobha Skyvue Stellar?</span>
                  <span className="toggle-icon">×</span>
                </div>
                <div className="faq-answer">
                  <p>
                    For a strong asset where its unique theme, robust infrastructure, branded housing experience,
                    manageable & well functional property and more are going to make it a first choice...
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span className="number">02.</span>
                  <span className="text">How life is going to be in Sobha Skyvue Stellar?</span>
                  <span className="toggle-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Life at Sobha Skyvue Stellar is crafted to offer convenience, elegance, and a community-focused lifestyle...
                  </p>
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  <span className="number">03.</span>
                  <span className="text">What is Sobha Skyvue Stellar?</span>
                  <span className="toggle-icon">+</span>
                </div>
                <div className="faq-answer">
                  <p>
                    Sobha Skyvue Stellar is a premium high-rise real estate project offering state-of-the-art amenities...
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>




    </main>
  );
}
