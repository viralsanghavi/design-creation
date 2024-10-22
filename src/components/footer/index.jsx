import {InstagramLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import {Button} from "../ui/button";
import {Input} from "../ui/input";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#484a3c] text-[#f6f1e9] py-20">
        <div className="max-w-screen-2xl mx-auto my-0 w-full">
          <div className="flex items-start justify-between">
            <img src="/logo.png" className="w-60 h-60 fill-[white]" />
            <div className="w-full">
              <div className="flex flex-col items-center gap-8 pb-8">
                <div className="grid grid-cols-5 items-center w-full justify-between text-xl px-20">
                  <div>
                    <p className="hover:underline cursor-pointer">Projects</p>
                  </div>
                  <p className="hover:underline cursor-pointer">About us</p>
                  <p className="hover:underline cursor- pointer">Team</p>
                  {/* <div className="flex flex-col items-start gap-2"> */}
                  <p className="hover:underline cursor-pointer">Careers</p>
                  {/* </div> */}

                  <div className="flex gap-4">
                    {/* <img className="hover:underline cursor-pointer" /> */}
                    <img src="/fb.svg" className="h-8 w-8" />
                    <InstagramLogoIcon className="h-8 w-8" />
                    <LinkedInLogoIcon className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex flex-col w-full justify-between text-xl px-20 gap-4">
                  <div>
                    <h5 className="text-xl">Phone</h5>
                    <a
                      className="text-base"
                      target="__blank"
                      href="tel:+918080626605"
                    >
                      +91 8080626605
                    </a>
                  </div>
                  <div>
                    <h5 className="text-xl">Email</h5>
                    <a
                      className="text-base"
                      target="__blank"
                      href="mail:noerrtech@gmail.com"
                    >
                      noerrtech@gmail.com
                    </a>
                  </div>
                </div>
                <div className="w-full max-w-lg flex flex-col justify-between h-auto gap-4 mr-4">
                  <h5 className="text-xl">Subscribe</h5>
                  <p>Our strategy, thinking and insights. Shared with you.</p>
                  <div className="flex justify-between items-center gap-2">
                    <Input placeholder="Enter you email" className="" />
                    <div>
                      <Button>Subscribe</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <hr />
            <div className="flex justify-center gap-4 pt-4 text-opacity-50 text-white">
              <p>
                ©2024 All Rights Reserved. Design Creation. Developed by
                NoerrTech
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
