import React from "react";
import HorizontalLine from "../horizontal-line";
import {Input} from "../ui/input";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#484a3c] text-[#f6f1e9] py-32">
        <div className="max-w-screen-2xl mx-auto my-0 w-full">
          <div className="flex items-center pb-32">
            <h1 className="font-medium text-6xl w-full">Design Creation</h1>
            {/* List of Menu */}
            <div className="flex items-center w-full justify-between text-xl ">
              <p className="hover:underline cursor-pointer">Projects</p>
              <p className="hover:underline cursor-pointer">About us</p>
              <div className="flex flex-col items-start gap-2">
                <p className="hover:underline cursor-pointer">Team</p>
                <p className="hover:underline cursor-pointer">Careers</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-xl mb-4">Office</h5>
              <a
                className="text-base"
                target="__blank"
                href="https://maps.app.goo.gl/iaWKoJ1an3ZV8L4R6"
              >
                Vidyavihar, Mumbai, 400014.
              </a>
              <div className="mt-8 text-xl">
                <h5>LinkedIn</h5>
                <h5>Instagram</h5>
              </div>
            </div>
            <div>
              <div>
                <h5 className="text-xl mb-4">Phone</h5>
                <a
                  className="text-base"
                  target="__blank"
                  href="tel:+918080626605"
                >
                  +91 8080626605
                </a>
              </div>
              <div>
                <h5 className="text-xl mb-4">Email</h5>
                <a
                  className="text-base"
                  target="__blank"
                  href="mail:noerrtech@gmail.com"
                >
                  noerrtech@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-xl mb-4">Subscribe</h5>
              <p>Our strategy, thinking and insights. Shared with you.</p>
              <Input placeholder="Enter you email" className="mt-4" />
            </div>
          </div>
          <div className="mt-24">
            <hr />
            <div className="flex justify-end gap-4 pt-12 text-opacity-50 text-white">
              <p>© Design Creation 2024</p>
              <p>Website by NoerrTech</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
