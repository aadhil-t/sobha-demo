"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/_neighbourhood.scss";
import "../../styles/_additional-info.scss";

import FaqSection from "../components/faqSec";
import EnqSetion from "../components/EnqSec";
import TopHeadCnt from "../../app/components/Topheadcnt";

export default function Product() {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
    });
  }, []);


  return (
    <main>
      {/* ✅ Sub Banner Section */}
      <div className="sub-banner-sec">
        <div className="sub-bnr-outer">
          <div className="container">
            <div></div>
          </div>
        </div>
      </div>

      {/* ✅ Neighbourhood Section */}
      <div className="neighbourhood-sec">
        <div className="neighbourhood-outer">
          <div className="container">
            <TopHeadCnt
              items={[
                {
                  heading: "Neighbourhood",
                  subHeading: "Skyvue Stellar at Sobha Hartland 2 Dubai Location",
                  content: `Sobha Skyvue Stellar is positioned in Sobha Hartland 2 — a community just 15 minutes from Downtown,
                  Business Bay, Dubai International Airport, and Palm Jumeirah. Its proximity to Mohammed Bin Rashid City (MBR City)
                  adds extra value, making it a central and well-connected location with high capital appreciation potential.`,
                },
              ]}
            />
            <div className="loc-img">
              <img src="assets/product/dubai-location.png" alt="Dubai Location" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Additional Info Section */}
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
              <div className="info-card">
                <div className="point-cnt">
                  <h6>It aims to deliver luxury in every corner</h6>
                </div>
                <div className="info-img">
                  <img src="assets/product/addition1.png" alt="Luxury Image" />
                </div>
                <div className="info-cnt">
                  <p>
                    With meticulous planning and attention to detail, Sobha Realty introduces Sobha Skyvue Stellar—a luxurious addition
                    to the Skyvue Collection. Offering 1, 2, 3, and 3.5 BR apartments, it blends sophistication, comfort, and waterfront
                    living to set new standards of luxury and create unforgettable family memories.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="point-cnt">
                  <h6>Part of a family-oriented community</h6>
                </div>
                <div className="info-img">
                  <img src="assets/product/addition2.png" alt="Community Image" />
                </div>
                <div className="info-cnt">
                  <p>
                    Sobha Hartland 2 brings the thrill of modern living across 8 million sq. ft. with a stunning crystal lagoon, private
                    beach access, and 1 million sq. ft. of lush green spaces. Designed for families, the community offers schools, outdoor
                    games, pools, pet care, and more—creating a perfect blend of comfort, nature, and urban lifestyle.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="point-cnt">
                  <h6>Asset in a well-approachable position</h6>
                </div>
                <div className="info-img">
                  <img src="assets/product/addition3.png" alt="Location Image" />
                </div>
                <div className="info-cnt">
                  <p>
                    Sobha Skyvue Stellar is located in Sobha Hartland 2, just 15 minutes from Downtown Dubai, Business Bay, Dubai
                    International Airport, and Palm Jumeirah. Its proximity to Mohammed Bin Rashid City (MBR City) makes it a prime,
                    well-connected location—ensuring strong capital appreciation for your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Faq Section */}
      <FaqSection />

      {/* ✅ Enquire Section */}
      <EnqSetion />
    </main>
  );
}
