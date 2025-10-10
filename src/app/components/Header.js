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
      <div className="container">
        <div className="head-wrapper">
          {/* Left: Logo */}
          <div className="logo-blk">
            <Link href="/">
              <img src="/assets/logo-bnr.svg" alt="Sobha Banner" />
            </Link>
          </div>

          {/* Center: Nav links */}
          <nav className={`nav-links-blk ${isMenuOpen ? "open" : ""}`}>
            <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Button href="/enquire" label="Enquire Now" />
          </nav>

          {/* Right: Hamburger (mobile only) */}
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
