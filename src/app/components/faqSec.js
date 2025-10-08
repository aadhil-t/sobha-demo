"use client"
import React, { useEffect } from 'react';
import "../globals.scss";
import "../../styles/_common.scss";
import "../../styles/_faq.scss";
import { initAccordion } from "../../app/faq";

export default function FaqSection() {
  
  // Accordian //
        useEffect(() => {
        initAccordion();
      }, []);
      
  return (
    <section className="faq-section">
      <div className="faq-outer">
        <div className="container">
          <div className="faq-header" data-aos="fade-up">
            <span className="dot">.</span>
            <p className="label">FAQ</p>
            <h2>Frequently Asked Questions!</h2>
          </div>

          <div className="faq-list">
            <div className="faq-item" data-aos="fade-right">
              <div className="faq-question">
                <span className="number">01.</span>
                <span className="text">
                  Why should you invest in Sobha Skyvue Stellar?
                </span>
                <span className="toggle-icon">×</span>
              </div>
              <div className="faq-answer">
                <p>
                  For a strong asset where its unique theme, robust
                  infrastructure, branded housing experience, manageable & well
                  functional property and more are going to make it a first
                  choice of residents where young couples, families and
                  investors will find this a perfect fit, so it turns out to be
                  a lucrative property with rental yields and capital
                  appreciation. And other than this, in Dubai, apartments are
                  always in demand because they are comparatively affordable,
                  and then they are easy to manage, so this way its high demand
                  will always add a strong perk to the property.
                </p>
              </div>
            </div>

            <div className="faq-item" data-aos="fade-left">
              <div className="faq-question">
                <span className="number">02.</span>
                <span className="text">
                  How life is going to be in Sobha Skyvue Stellar?
                </span>
                <span className="toggle-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  Life at Sobha Skyvue Stellar is crafted to offer convenience,
                  elegance, and a community-focused lifestyle...
                </p>
              </div>
            </div>

            <div className="faq-item" data-aos="fade-right">
              <div className="faq-question">
                <span className="number">03.</span>
                <span className="text">What is Sobha Skyvue Stellar?</span>
                <span className="toggle-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  Sobha Skyvue Stellar is a premium high-rise real estate
                  project offering state-of-the-art amenities...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
