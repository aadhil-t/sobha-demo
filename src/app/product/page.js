"use client";
import React, { useEffect } from "react";
// AOS //
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/_neighbourhood.scss"
import FaqSection from "../components/faqSec";
import EnqSetion from "../components/EnqSec";
import TopHeadCnt from "../../app/components/Topheadcnt";

export default function product() {
  // Aos //
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: false, // whether animation should happen only once
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <main>
      {/* Sub Banner Section */}
      <div className="sub-banner-sec">
        <div className="sub-bnr-outer">
          <div className="container">
            <div></div>
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
                  content: `Sobha Skyvue Stellar is positioned in Sobha Hartland 2 a community that is just 15 min from Downtown,
                   Business, Dubai International Airport, Palm Jumeirah and more places are well approachable, other than this, 
                   its proximity to Mohammed Bin Rashid City (MBR City) adds extra value to the location making it a central & 
                   well connected spot in Dubai. So having an asset in such a location ensures high capital appreciation.`,
                },
              ]}
            />
            <div className="loc-img">
                <img src="assets/product/dubai-location.png" alt="Resort" />
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
