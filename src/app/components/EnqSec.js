"use client";
import React, { useEffect } from "react";
import "../globals.scss";
import "../../styles/_common.scss";
import "../../styles/_enq-today.scss"

export default function EnqSetion() {

  return (
    <div className="enquire-section">
      <div className="overlay">
        <div className="content" data-aos="fade-up">
          <h1>Enquire Today!</h1>
          <p>Our team will reach out with all the information you need</p>
          <a href="" className="contact-btn">
            Contact <br/> Now
          </a>
        </div>
      </div>
    </div>
  );
}
