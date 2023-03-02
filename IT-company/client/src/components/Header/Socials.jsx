import { Component } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://instagram.com" target="_blank">
        <AiFillLinkedin />
      </a>
      <a href="https://twitter.com" target="_blank">
        <AiFillTwitterSquare />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100090448612829&is_tour_dismissed=true"
        target="_blank"
      >
        <AiFillFacebook />
      </a>
    </div>
  );
};
export default Socials;
