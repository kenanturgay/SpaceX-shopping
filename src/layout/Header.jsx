import React from "react";
import basketIcon from "../assets/Icons/basketIcon.png";
import moreIcon from "../assets/Icons/moreIcon.png";
import searchIcon from "../assets/Icons/searchIcon.png";
import personIcon from "../assets/Icons/personIcon.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="container mx-auto flex justify-between items-center pt-8 pl-8 pr-8">
          <a
            href="/"
            className="font-montserrat font-semibold text-2xl color-[#252B42]"
          >
            Bandage
          </a>
          <div className="flex items-center gap-5">
            <a href="">
              <img src={personIcon} alt="" />
            </a>
            <a href="">
              <img src={searchIcon} alt="" />
            </a>
            <a href="">
              <img src={basketIcon} alt="" />
            </a>
            <a href="">
              <img src={moreIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="text-3xl p-28">
          <ul className="flex flex-col items-center gap-9 font-montserrat font-semibold text-[#737373]">
            <li>
              <a href="/" className="hover:font-thin">
                Home
              </a>
            </li>
            <li>
              <a href="/Product" className="hover:font-thin">
                Product
              </a>
            </li>
            <li>
              <a href="/Pricing" className="hover:font-thin">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:font-thin">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
