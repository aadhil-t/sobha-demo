"use client";

import { useEffect } from "react";
import gsap from "gsap";
import "../../styles/_common.scss";

export default function MouseEffect() {
  useEffect(() => {
    const circle = document.querySelector(".circle");
    const circleFollow = document.querySelector(".circle-follow");
    const mouseEffect = document.querySelector(".mouse-effect");

    if (!circle || !circleFollow || !mouseEffect) return;

    gsap.set(circle, { xPercent: -50, yPercent: -50 });
    gsap.set(circleFollow, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(circle, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(circle, "y", { duration: 0.6, ease: "power3" });

    const xFollow = gsap.quickTo(circleFollow, "x", { duration: 1.2, ease: "power3" });
    const yFollow = gsap.quickTo(circleFollow, "y", { duration: 1.2, ease: "power3" });

    const handleMouseMove = (e) => {
      mouseEffect.style.opacity = "1";
      xTo(e.clientX);
      yTo(e.clientY);
      xFollow(e.clientX);
      yFollow(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="mouse-effect">
      <div className="circle"></div>
      <div className="circle-follow"></div>
    </div>
  );
}
