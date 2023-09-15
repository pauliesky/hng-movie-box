// import React from "react";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Youtube from "../assets/Youtube.svg";

const Footer = () => {
  return (
    <>
      <footer className=" w-full mt-10 text-black h-32 flex flex-col gap-6 items-center justify-center">
        <div className="flex gap-8">
          <img src={Facebook} />
          <img src={Twitter} />
          <img src={Instagram} />
          <img src={Youtube} />
        </div>
        <div className="flex gap-8">
          <span>Conditions of Use</span>
          <span>Privacy & Policy</span>
          <span>Press Room</span>
        </div>
        <div>
          <span>@MusicBox by Adriana Eka Prayuhda</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
