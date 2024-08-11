import React from "react";

import HelpCenter from "./HelpCenter";

const Footer = () => {
  return (
    <div className=" bg-blue text-paper max-sm:px-3 md:px-0">
      <div className=" container max-w-xl  mx-auto pt-footer-top pb-10 font-proxima">
        <div className="  grid  md:grid-cols-5 grid-cols-1 md:pb-14 pb-8 gap-4 ">
          <div className=" flex  md:gap-4 gap-2 flex-col">
            <a href="#" className=" md:pb-8 pb-4  font-lato font-normal">
              Software
            </a>

            <a href="#" className="  font-lato font-normal">
              Features overview
            </a>
            <a href="#" className="  font-lato font-normal">
              Solutions
            </a>
            <a href="#" className="  font-lato font-normal">
              Free time tracking app
            </a>
            <a href="#" className="  font-lato font-normal">
              Integrations
            </a>
            <a href="#" className="  font-lato font-normal">
              Download app
            </a>
            <a href="#" className="  font-lato font-normal">
              Demo
            </a>
            <a href="#" className="  font-lato font-normal">
              Time tracking API
            </a>
            <a href="#" className="  font-lato font-normal">
              Request a feature
            </a>
          </div>
          <div className=" flex  md:gap-4 gap-2 flex-col">
            <a href="#" className=" md:pb-8 pb-4  font-lato font-normal">
              Learning center
            </a>

            <a href="#" className="  font-lato font-normal">
              Time tracking resources
            </a>
            <a href="#" className="  font-lato font-normal w-52">
              Workforce management resources
            </a>
            <a href="#" className="  font-lato font-normal">
              Business resources
            </a>
            <a href="#" className="  font-lato font-normal">
              Blog
            </a>
          </div>
          <div className=" flex  md:gap-4 gap-2 flex-col">
            <a href="#" className=" md:pb-8 pb-4  font-lato font-normal">
              More
            </a>

            <a href="#" className="  font-lato font-normal">
              Help Center
            </a>
            <a href="#" className="  font-lato font-normal">
              FAQ
            </a>
            <a href="#" className="  font-lato font-normal">
              Status
            </a>
          </div>
          <div className=" flex  md:gap-4 gap-2 flex-col">
            <a href="#" className=" md:pb-8 pb-4  font-lato font-normal">
              Company
            </a>

            <a href="#" className="  font-lato font-normal">
              About us
            </a>
            <a href="#" className="  font-lato font-normal">
              Reviews
            </a>
            <a href="#" className="  font-lato font-normal">
              Customer stories
            </a>
            <a href="#" className="  font-lato font-normal">
              Careers
            </a>
            <a href="#" className="  font-lato font-normal">
              Press
            </a>
          </div>
          <div>
            <HelpCenter />
          </div>
        </div>
        <div className=" grid grid-cols-12 gap-4">
          <div className=" md:col-span-2 col-span-12">
            <img src=" /img/Group 427319793.png" />
          </div>
          <div className=" md:col-span-3 col-span-12">
            <a href="#" className=" text-base font-poppins  font-normal">
              Copyright © 2024 Netsoft Holdings, LLC 11650 Olio Road, Suite
              #1000 - 193 Fishers, IN 46037
            </a>
          </div>
          <div className=" col-span-4 hidden md:inline"></div>
          <div className="md:col-span-3 col-span-12  flex items-center md:gap-8 gap-4">
            <a href="#" className=" text-base  font-lato font-normal">
              Terms
            </a>
            <a href="#" className=" text-base  font-lato font-normal">
              Privacy
            </a>
            <a href="#" className=" text-base  font-lato font-normal">
              GDPR compliance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
