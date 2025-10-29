"use client";
import { useState } from "react";
import Link from "next/link";
import "../globals.scss";
import "../../styles/_header.scss";
import "../../styles/_common.scss";
import Button from "./EnquireBtn";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<header className="header-sec">
  {/* Nav moved outside container */}
  <nav className={`nav-links-blk ${isMenuOpen ? "open" : ""}`}>
    <Link
      href="/"
      className="nav-link"
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </Link>
    <Link
      href="/product"
      className="nav-link"
      onClick={() => setIsMenuOpen(false)}
    >
      Projects
    </Link>
    <Link
      href="/blogs"
      className="nav-link"
      onClick={() => setIsMenuOpen(false)}
    >
      Blogs
    </Link>

    {/* Enquire button inside menu (visible only on mobile) */}
    <div className="mobile-enquire">
      <Button
        className="enquire-btn"
        href="/enquire"
        label="Enquire Now"
      />
    </div>
  </nav>

  <div className="container">
    <div className="head-wrapper">
      {/* Logo */}
      <div className={`logo-blk ${isMenuOpen ? "menu-open" : ""}`}>
        <Link href="/">
          <img src="/assets/logo-bnr.svg" alt="Sobha Banner" />
        </Link>
      </div>

      {/* Enquire button (desktop) */}
      <div className="right-blk">
        <Button className="enquire-btn" href="/enquire" label="Enquire Now" />
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</header>

  );
}
