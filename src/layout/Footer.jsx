import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white px-4 py-8 text-gray-700 pl-8 font-montserrat">
      <div className="max-w-screen-md mx-auto ">
        {/* Sosyal Medya İkonları */}
        <div className="flex flex-col gap-6 color-[#FAFAFA] pt-8 pb-8">
          <div>
            <h3 className="font-montserrat font-bold text-2xl color-[#252B42]">
              Bandage
            </h3>
          </div>
          <div className="flex text-2xl mb-6 gap-5">
            {[
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
            ].map(({ icon: Icon, label, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-blue-400 hover:text-blue-600 transition duration-300"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bilgi Grupları */}

        <div className="grid grid-rows-4 gap-10 font-semibold mb-6">
          <div>
            <h3 className="mb-6 text-lg ">Company Info</h3>
            <ul className="text-sm space-y-4">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg">Legal</h3>
            <ul className="text-sm space-y-4">
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg">Features</h3>
            <ul className="text-sm space-y-4">
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-lg">Resources</h3>
            <ul className="text-sm space-y-4">
              <li>
                <a href="#">iOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>

        {/* İletişim ve Abonelik */}
        <div className="mt-8 mb-8 font-montserrat text-base">
          <h3 className="font-semibold mb-2">Get in Touch</h3>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-l-lg px-4 py-2 font-montserrat text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-60 max-h-14 "
            />
            <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-r-lg text-sm h-14">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <p className="text-center text-sm font-semibold font-montserrat">
        Made With Love By <br /> Finland All Rights Reserved.
      </p>
    </footer>
  );
}
