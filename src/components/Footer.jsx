import React from "react";

import HelpCenter from "./HelpCenter";

const Footer = () => {
  return (
    <div className=" bg-blue text-paper">
      <div className="container mx-auto pt-footer-top pb-10 font-proxima">
        <div className="  grid grid-cols-5 pb-14 ">
          <div className=" flex gap-4 flex-col">
            <a href="#" className=" pb-8 font-normal">
              Software
            </a>

            <a href="#" className=" font-normal">
              Features overview
            </a>
            <a href="#" className=" font-normal">
              Solutions
            </a>
            <a href="#" className=" font-normal">
              Free time tracking app
            </a>
            <a href="#" className=" font-normal">
              Integrations
            </a>
            <a href="#" className=" font-normal">
              Download app
            </a>
            <a href="#" className=" font-normal">
              Demo
            </a>
            <a href="#" className=" font-normal">
              Time tracking API
            </a>
            <a href="#" className=" font-normal">
              Request a feature
            </a>
          </div>
          <div className=" flex gap-4 flex-col">
            <a href="#" className=" pb-8 font-normal">
              Learning center
            </a>

            <a href="#" className=" font-normal">
              Time tracking resources
            </a>
            <a href="#" className=" font-normal w-52">
              Workforce management resources
            </a>
            <a href="#" className=" font-normal">
              Business resources
            </a>
            <a href="#" className=" font-normal">
              Blog
            </a>
          </div>
          <div className=" flex gap-4 flex-col">
            <a href="#" className=" pb-8 font-normal">
              More
            </a>

            <a href="#" className=" font-normal">
              Help Center
            </a>
            <a href="#" className=" font-normal">
              FAQ
            </a>
            <a href="#" className=" font-normal">
              Status
            </a>
          </div>
          <div className=" flex gap-4 flex-col">
            <a href="#" className=" pb-8 font-normal">
              Software
            </a>

            <a href="#" className=" font-normal">
              Features overview
            </a>
            <a href="#" className=" font-normal">
              Solutions
            </a>
            <a href="#" className=" font-normal">
              Free time tracking app
            </a>
            <a href="#" className=" font-normal">
              Integrations
            </a>
            <a href="#" className=" font-normal">
              Integrations
            </a>
          </div>
          <div>
            <HelpCenter />
          </div>
        </div>
        <div className=" grid grid-cols-12">
          <div className=" col-span-2">
            {" "}
            <img src="/public/img/Group 427319793.png" />
          </div>
          <div className=" col-span-3">
            <a href="#" className=" text-base font-poppins font-normal">
              Copyright © 2024 Netsoft Holdings, LLC 11650 Olio Road, Suite
              #1000 - 193 Fishers, IN 46037
            </a>
          </div>
          <div className=" col-span-4"></div>
          <div className="col-span-3  flex items-center gap-8">
            <a href="#" className=" text-base font-normal">
              Terms
            </a>
            <a href="#" className=" text-base font-normal">
              Privacy
            </a>
            <a href="#" className=" text-base font-normal">
              GDPR compliance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
