import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { footerInfo } from "../data/footerInfo.js";

export default function Footer() {
  return (
    <footer>
      {/* Sosyal Medya İkonları */}

      <div className="bg-white px-11 text-footer_text_color">
        <div className="container mx-auto flex flex-col items-start justify-between gap-4  py-16 sm:flex-row sm:items-center 2xl:px-36">
          <div className="text-3xl font-bold">t-Wix</div>
          <div className="flex space-x-4 text-footer_icon_color">
            <button >
              <Facebook />
            </button>
            <button>
              <Twitter />
            </button>
            <button>
              <Instagram />
            </button>
          </div>
        </div>
      </div>

      {/* Bilgi Grupları */}

      <div className="container mx-auto px-11 text-footer_text_color">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-12 py-8 sm:grid-cols-4 md:grid-cols-6 lg:px-0">
          {footerInfo.map((section, index) => (
            <div key={index} className="mb-10">
              <h5 className="mb-4 text-lg font-montserrat font-bold">{section.title}</h5>
              {section.links.map((link, idx) => (
                <p key={idx} className="text font-montserrat font-semibold text-sm py-1">
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* İletişim ve Abonelik */}
      <div className="mt-8 mb-8 font-montserrat text-base px-11">
        <h3 className="font-semibold mb-6">Get in Touch</h3>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-l-lg px-4 py-2 font-montserrat text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-60 max-h-14 "
          />
          <button className="bg-footer_button text-white px-4 py-2 rounded-r-lg text-sm h-14">
            Subscribe
          </button>
        </div>
      </div>

      {/* Alt Bilgi */}
      <p className="text-center text-sm font-semibold font-montserrat mb-5 mt-24">
        Made With Love By <br /> Finland All Rights Reserved.
      </p>
    </footer>
  );
}
