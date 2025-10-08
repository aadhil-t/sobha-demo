"use client"
import React, { useEffect } from 'react';
// AOS //
import AOS from 'aos';
import 'aos/dist/aos.css';
import FaqSection from '../components/faqSec';
import EnqSetion from '../components/EnqSec';

export default function product(){
    
      // Aos //
        useEffect(() => {
        AOS.init({
          duration: 1200, // animation duration in ms
          once: false,     // whether animation should happen only once
          mirror: false,  // whether elements should animate out while scrolling past them
        });
      }, []);

    return(
        <main>
            {/* Sub Banner Section */}
            <div className='sub-banner-sec'>
                <div className='sub-bnr-outer'> 
                    <div className='container'>
                        <div>

                        </div>
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