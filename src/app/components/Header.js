import Link from "next/link";
import "../globals.scss";
import "../../styles/_header.scss";
import "../../styles/_common.scss";
import Button from "./EnquireBtn"; 

export default function Header() {
  return (
    <header className="header-sec">
      <div className="container">
        <div className="head-wrapper">
          <img src="/assets/logo-bnr.svg" alt="Sobha Banner" />
          <nav  className="nav-links-blk">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              Projects
            </Link>
          </nav>
          <Button href="/enquire" label="Enquire Now"/>
        </div>
      </div>
    </header>
  );
}
