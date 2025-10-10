"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/_neighbourhood.scss";
import "../../styles/_additional-info.scss";
import "../../styles/_nearbtlocation.scss";
import "../../styles/_hurtland.scss";
import "../../styles/_sub-banner.scss";
import "../../styles/_gallery.scss";
import FaqSection from "../components/faqSec";
import EnqSetion from "../components/EnqSec";
import TopHeadCnt from "../../app/components/Topheadcnt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Product() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <main>
      {/* Sub Banner Section */}
      <div className="sub-banner-sec">
        <div className="sub-bnr-img">
          <img
            src="/assets/product/sub-bnr.png"
            alt="Skyvue Stellar at Sobha Hartland 2 Dubai"
          />
          <div className="container">
            <div className="sub-bnr-txt">
              <h1>Sky view stellar</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Neighbourhood Section */}
      <div className="neighbourhood-sec">
        <div className="neighbourhood-outer">
          <div className="container">
            <TopHeadCnt
              items={[
                {
                  heading: "Neighbourhood",
                  subHeading:
                    "Skyvue Stellar at Sobha Hartland 2 Dubai Location",
                  content: `Sobha Skyvue Stellar is positioned in Sobha Hartland 2 — a community just 15 minutes from Downtown,
                  Business Bay, Dubai International Airport, and Palm Jumeirah. Its proximity to Mohammed Bin Rashid City (MBR City)
                  adds extra value, making it a central and well-connected location with high capital appreciation potential.`,
                },
              ]}
            />
            <div className="loc-img" data-aos="fade-up">
              <img
                src="assets/product/dubai-location.png"
                alt="Dubai Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-sec">
        <div className="gallery-outer">
          <div className="container">
            <TopHeadCnt
              items={[
                {
                  heading: "Gallery",
                  subHeading: "Sobha Skyvue Stellar gallery",
                  content: `The right spot to grab all the pictures of the project giving an appropriate idea and vibes
                   of this beautiful development, so look at each of them below`,
                },
              ]}
            />
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              slidesPerView={1}
              spaceBetween={30}
              scrollbar={{
                el: ".swiper-scrollbar",
                draggable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                type: "fraction",
                el: ".swiper-pagination",
                formatFractionCurrent: (num) => `0${num}`,
                formatFractionTotal: (num) => `0${num}`,
                renderFraction: (currentClass, totalClass) => `
            <span class="${currentClass}"></span>
            /
            <span class="${totalClass}"></span>
          `,
              }}
              className="gallerySwipper"
            >
              <SwiperSlide>
                <img src="/assets/product/glswip1.png" alt="Living Room" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/product/dubai-location.png" alt="Dubai" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/product/glswip1.png" alt="Living Room 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/swip1.png" alt="Sky View" />
              </SwiperSlide>
            </Swiper>

            {/* Bottom Controls */}
            <div className="gallery-controls">
              <div className="swiper-pagination"></div>
              <div className="swiper-scrollbar"></div>
              <div className="swiper-nav">
                <div className="swiper-button-prev">
                  <img src="/assets/product/icon-left.svg" alt="Prev" />
                </div>
                <div className="swiper-button-next">
                  <img src="/assets/product/icon-right.svg" alt="Next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hurtland Section */}
      <div className="hurtland-sec">
        <div className="hurtland-outer">
          <div className="container">
            <div className="property-blk">
              <div className="property-image">
                <img
                  src="assets/product/stellar.png"
                  alt="Skyvue Stellar at Sobha Hartland 2 Dubai"
                />
              </div>

              <div className="property-details">
                <h2>Skyvue Stellar at Sobha Hartland 2 Dubai</h2>

                <div className="property-info">
                  <div className="info-item">
                    <h3>1.64M</h3>
                    <p>Starting Price</p>
                  </div>

                  <div className="info-item">
                    <h3>1–3BR</h3>
                    <p>Configuration</p>
                  </div>

                  <div className="info-item">
                    <h3>60:40</h3>
                    <p>Payment Plan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid amenities Section */}
      <div className="nearby-sec">
        <div className="nearby-outer">
          <div className="container">
            <div className="nearby-blk">
              <div className="location-card">
                <div className="icon">
                  <img
                    src="assets/product/wildlife.svg"
                    alt="Wildlife Sanctuary"
                  />
                </div>
                <div className="title">Ras Al Khor Wildlife Sanctuary</div>
                <div className="time">05 min.</div>
              </div>

              <div className="location-card">
                <div className="icon">
                  <img
                    src="assets/product/meydan.svg"
                    alt="Meydan Racecourse"
                  />
                </div>
                <div className="title">Meydan Racecourse</div>
                <div className="time">10 min.</div>
              </div>

              <div className="location-card">
                <div className="icon">
                  <img src="assets/product/schools.svg" alt="Schools" />
                </div>
                <div className="title">
                  Sobha Hartland & International Schools
                </div>
                <div className="time">10 min.</div>
              </div>

              <div className="location-card">
                <div className="icon">
                  <img src="assets/product/airport.svg" alt="Dubai Airport" />
                </div>
                <div className="title">Dubai International Airport</div>
                <div className="time">12 min.</div>
              </div>

              <div className="location-card">
                <div className="icon">
                  <img src="assets/product/business.svg" alt="Business Bay" />
                </div>
                <div className="title">Business Bay</div>
                <div className="time">12 min.</div>
              </div>

              <div className="location-card">
                <div className="icon">
                  <img src="assets/product/dubai.svg" alt="Dubai Frame" />
                </div>
                <div className="title">Dubai Frame</div>
                <div className="time">15 min.</div>
              </div>

              <div className="location-card">
                <div className="icon">
                  <img src="assets/product/downtown.svg" alt="Burj Khalifa" />
                </div>
                <div className="title">Burj Khalifa & Downtown Dubai</div>
                <div className="time">15 min.</div>
              </div>

              <div className="location-card">
                <div className="icon">
                  <img src="assets/product/dubai-mall.svg" alt="Dubai Mall" />
                </div>
                <div className="title">The Dubai Mall</div>
                <div className="time">15 min.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="additional-sec">
        <div className="additional-outer">
          <div className="container">
            <TopHeadCnt
              items={[
                {
                  heading: "Additional Info",
                  subHeading: "Skyvue Stellar by Sobha",
                  content: "",
                },
              ]}
            />

            <div className="info-card-blk">
              <div className="info-card" data-aos="fade-up">
                <div className="point-cnt">
                  <h6>It aims to deliver luxury in every corner</h6>
                </div>
                <div className="info-img">
                  <img src="assets/product/addition1.png" alt="Luxury Image" />
                </div>
                <div className="info-cnt">
                  <p>
                    With meticulous planning and attention to detail, Sobha
                    Realty introduces Sobha Skyvue Stellar—a luxurious addition
                    to the Skyvue Collection. Offering 1, 2, 3, and 3.5 BR
                    apartments, it blends sophistication, comfort, and
                    waterfront living to set new standards of luxury and create
                    unforgettable family memories.
                  </p>
                </div>
              </div>

              <div className="info-card" data-aos="fade-up">
                <div className="point-cnt">
                  <h6>Part of a family-oriented community</h6>
                </div>
                <div className="info-img">
                  <img
                    src="assets/product/addition2.png"
                    alt="Community Image"
                  />
                </div>
                <div className="info-cnt">
                  <p>
                    Sobha Hartland 2 brings the thrill of modern living across 8
                    million sq. ft. with a stunning crystal lagoon, private
                    beach access, and 1 million sq. ft. of lush green spaces.
                    Designed for families, the community offers schools, outdoor
                    games, pools, pet care, and more—creating a perfect blend of
                    comfort, nature, and urban lifestyle.
                  </p>
                </div>
              </div>

              <div className="info-card" data-aos="fade-up">
                <div className="point-cnt">
                  <h6>Asset in a well-approachable position</h6>
                </div>
                <div className="info-img">
                  <img
                    src="assets/product/addition3.png"
                    alt="Location Image"
                  />
                </div>
                <div className="info-cnt">
                  <p>
                    Sobha Skyvue Stellar is located in Sobha Hartland 2, just 15
                    minutes from Downtown Dubai, Business Bay, Dubai
                    International Airport, and Palm Jumeirah. Its proximity to
                    Mohammed Bin Rashid City (MBR City) makes it a prime,
                    well-connected location—ensuring strong capital appreciation
                    for your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faq Section */}
      <FaqSection />

      {/* Enquire Section */}
      <EnqSetion />
    </main>
  );
}
